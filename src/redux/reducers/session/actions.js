import _get from 'lodash/get'
import api from '../../../utils/api'
// import authWrapper from '../../../utils/authWrapper'

// ------------------------------------
// Constants
// ------------------------------------

export const SET_USER_TOKEN = 'SET_USER_TOKEN'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'

// ------------------------------------
// Actions
// ------------------------------------

export const setUserToken = payload => ({
	type: SET_USER_TOKEN,
	payload
})

export const setUserProfile = payload => ({
	type: SET_USER_PROFILE,
	payload
})

// ------------------------------------
// Authorization
// ------------------------------------

export const loginAction = call => {
	return async (dispatch, getState) => {
		try {
			const { data, onSuccess } = call
   
			const userCredentials = _get(await api.login({ data }), 'data')
			const { accessToken, refreshToken } = userCredentials

			dispatch(setUserToken({ accessToken }))
			localStorage.setItem('refreshToken', refreshToken)

			const userProfile = _get(await api.getProfile({ accessToken }), 'data.userProfile')
			dispatch(setUserProfile(userProfile))

			onSuccess && onSuccess()
		} catch (e) {
			const { onError } = call
			const errMessage = _get(e, 'response.data.message', 'Server Error - make sure that e-mail and password are correct')
			onError && onError(errMessage)
		}
	}
}

export const loginAsGuestAction = call => {
	return async (dispatch, getState) => {
		try {
			const { onSuccess } = call
   
			const authToken = _get(await api.login({ data: {} }), 'data.AuthorizationToken.Token')
			
			dispatch(setUserToken(authToken))

			onSuccess && onSuccess()
		} catch (e) {
			const { onError } = call

			const errMessage = _get(e, 'response.data.Message', 'Connection problem')
			onError && onError(errMessage)
		}
	}
}


export const logoutAction = call => {
	return async (dispatch, getState) => {
		try {
			localStorage.removeItem('refreshToken')
			dispatch(setUserToken({}))
			dispatch(setUserProfile({}))
		} catch (e) {
			const { onError } = call
			onError && onError()
		}
	}
}

// ------------------------------------
// Media
// ------------------------------------

export const getMediaListsAction = call => {
	return async (dispatch, getState) => {
		try {
			const { onSuccess } = call
			const authToken = _get(getState(), 'session.authToken')
			// console.log({ authToken })

			const data = {
				MediaListId: 2,
				IncludeCategories: false,
				IncludeImages: true,
				IncludeMedia: false,
				PageSize: 15
			}

			const mediaList1 = _get(await api.getMediaList({ data: { ...data, PageNumber: 1 }, authToken }), 'data.Entities')
			const mediaList2 = _get(await api.getMediaList({ data: { ...data, PageNumber: 2 }, authToken }), 'data.Entities')
			// console.log({ mediaList1, mediaList2 })
      
			onSuccess && onSuccess({ mediaList1, mediaList2 })
		} catch (e) {
			const { onError } = call

			const errMessage = _get(e, 'response.data.Message', 'Connection problem')
			onError && onError(errMessage)
		}
	}
}

export const getMediaPlayInfo = call => {
	return async (dispatch, getState) => {
		try {
			const { onSuccess, data } = call

			const authToken = _get(getState(), 'session.authToken')

			const mediaPlayInfo = _get(await api.getMediaPlayInfo({ data: { ...data, streamType: 'TRIAL' }, authToken }), 'data')
			console.log({mediaPlayInfo})
			onSuccess && onSuccess(mediaPlayInfo)
		} catch (e) {
			const errMessage = _get(e, 'response.data.Message', 'Connection problem')
			const { onError } = call
			onError && onError(errMessage)
		}
	}
}
