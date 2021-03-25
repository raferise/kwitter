import create from "zustand";
import { devtools } from "zustand/middleware";
import { getMessages, getUser, loginRequest, logoutRequest, deleteMessage, createMessage, addLike, removeLike, createNewUser, updateUser, deleteUser } from "../fetchRequests";

const makeAlert = function(entropy, header, body) {
  return {
    id: String(Number(new Date()))+entropy,
    header,
    body,
  };
}

// define reducer function
const reducer = (set) => ({
  //USER MANAGEMENT
  user: {token: ""},
  login: async (username, password) => {
    let loginResp = await loginRequest(username, password);
    if (loginResp.username) {
      let userData = await getUser(loginResp.username, false);
      set(state => ({user: {...loginResp, ...userData.user}}))
      return true;
    } else {
      set(state => ({alerts:[...state.alerts, makeAlert(state.alerts.length, "Error signing in", loginResp.message)]}));
      return false;
    }
  },
  logout: async () => set(async state => { //refs previous state prefetch
    let resp = await logoutRequest(state.user.token);
    if (resp.statusCode === 200) {
      set(state => ({user: {token: ""}}));
      return true;
    } else {
      set(state => ({alerts:[...state.alerts, makeAlert(state.alerts.length, "Error signing out", resp.message)]}));
      return false;
    }
  }),
  signup: async (username, displayName, password) => {
    let resp = await createNewUser(username, displayName, password);
    if (resp.statusCode === 200) {
      return true;
    } else {
      set(state => ({alerts:[...state.alerts, makeAlert(state.alerts.length, "Error creating account", resp.message)]}));
      return false;
    }
  },
  edit: async (token, username, displayName, password, about) => {
    let resp = await updateUser(token, username, displayName, password, about);
    if (resp.statusCode === 200) {
      return true;
    } else {
      set(state => ({alerts:[...state.alerts, makeAlert(state.alerts.length, "Error updating account", resp.message)]}));
      return false;
    }
  },
  deleteAccount: async (token, username) => {
    let resp = await deleteUser(token, username);
    if (resp.statusCode === 200) {
      set(state => ({user: {token: ""}}));
      return true;
    } else {
      set(state => ({alerts:[...state.alerts, makeAlert(state.alerts.length, "Error deleting account", resp.message)]}));
      return false;
    }
  },
  //MESSAGES LIST MANAGEMENT
  messages: [],
  lastMessagesUser: undefined,
  removeMessage: async (token, messageId) => {
    let resp = await deleteMessage(token, messageId);
    if (resp.statusCode === 200) {
      set(state => ({messages:state.messages.filter(msg => msg.id !== messageId)}));
      return true;
    } else {
      set(state => ({alerts:[...state.alerts, makeAlert(state.alerts.length, "Error deleting message", resp.message)]}));
      return false;
    }
  },
  addMessage: async (token, text) => {
    let resp = await createMessage(token, text);
    if (resp.statusCode === 200) {
      set(state => ({messages:[resp.message, ...state.messages]}));
      return true;
    } else {
      set(state => ({alerts:[...state.alerts, makeAlert(state.alerts.length, "Error posting message", resp.message)]}));
      return false;
    }
  },
  loadMoreMessages: (username) => set(async state => { //refs previous state prefetch
    //if username has changed, use no offset and remove previous messages.
    const differentUsername = state.lastMessagesUser !== username;
    let resp = await getMessages(10, differentUsername ? 0 : state.messages.length, username);
    if (resp.messages.length > 0) {
      set(state => ({
        messages: [...(differentUsername ? [] : state.messages), ...resp.messages],
        lastMessagesUser: username,
        hasMore: true
      }));
    } else {
      set(state => ({hasMore: false}));
    }
  }),
  clearMessages: () => set(state => ({messages:[]})),
  hasMore: true,
  likeMessage: async (token, messageId) => {
    let resp = await addLike(token, messageId);
    if (resp.statusCode === 200) {
      set(state => {
        let index = state.messages.findIndex(msg => msg.id === messageId);
        let newMessage = {...state.messages[index]};
        newMessage.likes = [...newMessage.likes, resp.like];
        let newMessages = [...state.messages];
        newMessages.splice(index, 1, newMessage);
        return {messages:newMessages};
      })
      return true;
    } else {
      set(state => ({alerts:[...state.alerts, makeAlert(state.alerts.length, "Error liking message", resp.message)]}));
      return false;
    }
  },
  unlikeMessage: async (token, messageId, likeId) => {
    let resp = await removeLike(token, likeId);
    if (resp.statusCode === 200) {
      set(state => {
        let index = state.messages.findIndex(msg => msg.id === messageId);
        let newMessage = {...state.messages[index]};
        newMessage.likes = newMessage.likes.filter(like => like.id !== resp.id);
        let newMessages = [...state.messages];
        newMessages.splice(index, 1, newMessage);
        return {messages:newMessages};
      })
      return true;
    } else {
      set(state => ({alerts:[...state.alerts, makeAlert(state.alerts.length, "Error liking message", resp.message)]}));
      return false;
    }
  },
  //ALERTS MANAGEMENT
  alerts: [],
  removeAlert: (id) => set(state => ({alerts:state.alerts.filter(a => a.id !== id)})),
});

// create useStore hook
export const useStore = create(devtools(reducer));
