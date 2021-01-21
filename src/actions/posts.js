import * as api from '../api';

// action creators:
// - function that return a function
// - because of (redux thunk) async code the function has to return an async function and instead of return the action it has to dispatch it
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		const action = { type: 'FETCH_ALL', payload: data };
		dispatch(action);
	} catch (error) {
		console.log(error.message);
	}
}