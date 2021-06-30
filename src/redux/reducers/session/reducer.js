import {
	SET_USER_TOKEN,
	SET_USER_PROFILE
} from './actions'

// ------------------------------------
// Reducer
// ------------------------------------

const getInitialState = () => ({
	authToken: '',
	profile: {}  
})

export default function reducer(state = getInitialState(), action) {
	switch (action.type) {
	case SET_USER_TOKEN:
		return { ...state, authToken: action.payload }
	case SET_USER_PROFILE:
		return { ...state, profile: action.payload }
	default:
		return state
	}
}
