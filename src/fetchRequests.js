const baseURL = "https://socialapp-api.herokuapp.com/";

export const loginRequest = (username, password) => {
  return fetch(baseURL + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
};

export const logoutRequest = (token) => {
  return fetch(baseURL + "auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

export const updateUser = (username, password, about, displayName) => {
return fetch(baseURL + "users/" + username, {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },

  body: JSON.stringify({
    password,
    about,
    displayName
  }),

})

.then((res) => res.json())

};
