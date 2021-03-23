import create from "zustand";
import { devtools } from "zustand/middleware";

// define reducer function
const reducer = (set) => ({
  user: {token: ""},
  messages: [],
  login: (userData) => set(state => ({user: userData})),
  logout: () => set(state => ({user: {token: ""}})),

});

// create useStore hook
export const useStore = create(devtools(reducer));
