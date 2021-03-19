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

export const getMessages = (limit, offset, username) => {
  let queryParams = [];
  if (limit !== undefined) queryParams.push("limit="+limit); 
  if (offset !== undefined) queryParams.push("offset="+offset);
  if (username !== undefined) queryParams.push("username="+username);
  queryParams = (queryParams.length === 0) ? "" : "?" + queryParams.join("&");
  return fetch(baseURL + "messages" + queryParams, {
  })
  .then((res) => res.json());
};
