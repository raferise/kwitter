const cache = {
  users:{}
}

const baseURL = "https://socialapp-api.herokuapp.com/";

export const loginRequest = (username, password) => {
  return fetch(baseURL + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const logoutRequest = (token) => {
  return fetch(baseURL + "auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

export const deleteMessage = (token, messageId) => {
  return fetch(baseURL + "messages/" + messageId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token },
  });
};

export const addLike = (token, messageId) => {
  return fetch(baseURL + "likes", {
    method: "POST",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    body: JSON.stringify({
      messageId,
    }),
  }).then((res) => res.json());
};

export const getMessages = (limit, offset, username) => {
  let queryParams = [];
  if (limit !== undefined) queryParams.push("limit="+limit); 
  if (offset !== undefined) queryParams.push("offset="+offset);
  if (username !== undefined) queryParams.push("username="+username);
  queryParams = (queryParams.length === 0) ? "" : "?" + queryParams.join("&");
  return fetch(baseURL + "messages" + queryParams).then((res) => res.json());
};

export const updateUser = (token,username, password, about, displayName) => {
  return fetch(baseURL + "users/" + username, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + token }, 
    body: JSON.stringify({
      password,
      about,
      displayName,
    }),
  }).then((res) => res.json());
};

export const createMessage = (token,text) => {
  return fetch (baseURL + "/messages", {
    method:"POST",
    headers: { Authorization: "Bearer " + token },
    body: JSON.stringify ({ 
      text,
    }),
  }).then((res) => res.json());
};

export const createNewUser = (username, displayName, password) => {
  return fetch(baseURL + "users", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({
      username,
      displayName,
      password
    }),
  }).then((res) => res.json());
};

export const getUser = (username, useCache=true) => {
  let cached = cache.users[username];
  if (cached && useCache) return cached;
  let request = fetch(baseURL + "users/" + username).then(res => res.json()).then(async (res) => {
    res.user.pictureRaw = await getPicture(res.user.username);
    return res;
  });
  cache.users[username] = request;
  return request;
};

//https://medium.com/front-end-weekly/fetching-images-with-the-fetch-api-fb8761ed27b2
export const getPicture = async (username) => {
  let resp = await fetch(baseURL + `users/${username}/picture`)
  if (resp.ok) {
    let buffer = await resp.arrayBuffer();
    return 'data:image/jpeg;base64,'+window.btoa([].slice.call(new Uint8Array(buffer)).reduce((binary, byte) => binary+String.fromCharCode(byte), ""));
  } else {
    return "placeholder.png";
  }
}

export const deleteUser = (token, username) => {
  return fetch(baseURL + "users/" + username, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

export const removeLike = (token, likeId) => {
  return fetch(baseURL + "likes/" + likeId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};
