import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		case AUTH: {
			console.log('action data', action.payload)
			// return state;
			localStorage.setItem('memories_profile', JSON.stringify(action.payload))
			return { ...state, authData: action.payload };
		}
		case LOGOUT: {
			localStorage.removeItem('memories_profile')
			return { ...state, authData: null };
		}
		default: {
			return state;
		}
	}
}

export default authReducer;