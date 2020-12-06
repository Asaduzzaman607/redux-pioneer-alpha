import axios from "./axios";

const url = "http://localhost:8080/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.get(url, newPost);
export const updatePost = (id) => axios.get(url, id);
export const deletePost = (id) => axios.delete(url, id);
