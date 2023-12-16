import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3300",
});

// sign up
export const signup = (user) => API.post("/user/register", user);

// sign in
export const signin = (user) => API.post("/user/login", user);

// add user's subjects
export const addSubjects = (request, token) =>
  API.patch(
    "/user/addInfo",
    request,
    { headers: { Authorization: `Bearer ${token}` } },
    { withCredentials: true }
  );

// post creation
export const createPost = (post, token) =>
  API.post(
    "/post/create",
    post,
    { headers: { Authorization: `Bearer ${token}` } },
    { withCredentials: true }
  );

//Get subjects
export const getSubjects = (token) =>
  API.get(
    "/subject/list",
    { headers: { Authorization: `Bearer ${token}` } },
    { withCredentials: true }
  );
