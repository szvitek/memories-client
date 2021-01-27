import axios from 'axios';

// todo: make dynamic
// todo: maybe have to add proxy to package.json later
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = newPost => axios.post(url, newPost);
export const updatePost = (id, postData) => axios.patch(`${url}/${id}`, postData);
export const deletePost = id => axios.delete(`${url}/${id}`);
export const likePost = id => axios.patch(`${url}/${id}/like`);