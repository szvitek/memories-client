import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api';

// action creators:
// - function that return a function
// - because of (redux thunk) async code the function has to return an async function and instead of return the action it has to dispatch it
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		const action = { type: FETCH_ALL, payload: data };
		dispatch(action);
	} catch (error) {
		console.log(error.message);
	}
}

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		dispatch({ type: CREATE, payload: data })
	} catch (error) {
		console.log(error.message);
	}
}

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
}

export const deletePost = id => async dispatch => {
	try {
		await api.deletePost(id);
		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		console.log(error.message);
	}
}

export const likePost = id => async dispatch => {
	try {
		const { data } = await api.likePost(id);

		dispatch({ type: LIKE, payload: data })
	} catch (error) {
		console.log(error.message);
	}
}