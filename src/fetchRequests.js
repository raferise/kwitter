const cache = {
  users:{}
}

const baseURL = [
  "https://socialapp-api.herokuapp.com/",
  "https://kwitter-api.herokuapp.com/",
  "https://kwitter-api-b.herokuapp.com/",
][0];

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
  }).then((res => res.json()));
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

export const updateUser = (token, username, displayName, password, about) => {
  return fetch(baseURL + "users/" + username, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" }, 
    body: JSON.stringify({
      password,
      about,
      displayName,
    }),
  }).then((res) => res.json());
};

export const createMessage = (token, text) => {
  return fetch (baseURL + "messages", {
    method: "POST",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    body: JSON.stringify({ 
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

export const getPicture = async (username) => {
  let resp = await fetch(baseURL + `users/${username}/picture`)
  if (resp.ok) {
    return await convertBlobToBase64(await resp.blob());
  } else {
    return "/placeholder.png";
  }
}
//https://gist.github.com/n1ru4l/dc99062577b746e0783410b1298ab897
const convertBlobToBase64 = blob => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});

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
