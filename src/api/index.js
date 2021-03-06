import axios from 'axios';

// todo: maybe have to add proxy to package.json later
const baseURL = process.env.REACT_APP_API_URL;
const API = axios.create({ baseURL });

// attach token to the req header
API.interceptors.request.use(req => {
	const profile = localStorage.getItem('memories_profile');
	if (profile) {
		const { token } = JSON.parse(profile);
		req.headers.Authorization = `Bearer ${token}`;
	}

	return req;
})

//POSTS
export const fetchPosts = () => API.get('/posts');
export const createPost = newPost => API.post('/posts', newPost);
export const updatePost = (id, postData) => API.patch(`/posts/${id}`, postData);
export const deletePost = id => API.delete(`/posts/${id}`);
export const likePost = id => API.patch(`/posts/${id}/like`);

// AUTH
export const signIn = formData => API.post('/user/signin', formData);
export const signUp = formData => API.post('/user/signup', formData);