import create from "zustand";
import { devtools } from "zustand/middleware";
import { getMessages, getUser, loginRequest, logoutRequest } from "../fetchRequests";

// define reducer function
const reducer = (set) => ({
  user: {token: ""},
  messages: [],
  lastMessagesUser: undefined,
  //performs a login request and fetches user data if successful
  login: async (username, password) => {
    let loginResp = await loginRequest(username, password);
    if (loginResp.user) {
      let userData = await getUser(loginResp.user);
      set(state => ({user: {...loginResp, ...userData.user}}))
    } else {
      //bad login
    }
  },
  //performs a logout request
  logout: async () => set(async state => {
    let resp = await logoutRequest(state.user.token);
    if (resp.statusCode === 200) set(state => ({user: {token: ""}}));
  }),
  loadMoreMessages: (username) => set(async state => { //async doesn't change state but can be used to ref previous state before request
    //if username has changed, use no offset and remove previous messages.
    const differentUsername = state.lastMessagesUser !== username;
    //load 10 messages
    let resp = await getMessages(10, differentUsername ? 0 : state.messages.length, username);
    set(state => ({
      messages: [...(differentUsername ? [] : state.messages), ...resp.messages],
      lastMessagesUser: username
    }));
  }),
});

// create useStore hook
export const useStore = create(devtools(reducer));
