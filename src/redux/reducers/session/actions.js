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
			const resData = _get(await api.login({ data: {...data}, Device: { Name:'whatever', PlatformCode: 'whatever' } }), 'data')
			
			const userProfile = _get(resData, 'User')
			const authToken = _get(resData, 'AuthorizationToken.Token')

			dispatch(setUserProfile(userProfile))
			dispatch(setUserToken(authToken))

			onSuccess && onSuccess()
		} catch (e) {
			console.log({e})
			const { onError } = call
			const errMessage = _get(e, 'response.data.Message', 'Connection problem')
			onError && onError(errMessage)
		}
	}
}

export const loginAsGuestAction = call => {
	return async (dispatch, getState) => {
		try {
			const { onSuccess } = call
   
			const resData = _get(await api.login({ data: {} }), 'data')
			const userProfile = _get(resData, 'User')
			const authToken = _get(resData, 'AuthorizationToken.Token')
			
			dispatch(setUserProfile(userProfile))
			dispatch(setUserToken(authToken))

			onSuccess && onSuccess()
		} catch (e) {
			const { onError } = call

			const errMessage = _get(e, 'response.data.Message', 'Connection problem')
			onError && onError(errMessage)
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

			const data = {
				MediaListId: 2,
				IncludeCategories: false,
				IncludeImages: true,
				IncludeMedia: false,
				PageSize: 15
			}

			const mediaList1 = _get(await api.getMediaList({ data: { ...data, PageNumber: 1 }, authToken }), 'data.Entities')
			const mediaList2 = _get(await api.getMediaList({ data: { ...data, PageNumber: 2 }, authToken }), 'data.Entities')
      
			onSuccess && onSuccess({ mediaList1, mediaList2 })
		} catch (e) {
			const { onError } = call

			const errMessage = _get(e, 'response.data.Message', 'Connection problem')
			onError && onError(errMessage)
		}
	}
}

export const getMediaPlayInfoAction = call => {
	return async (dispatch, getState) => {
		try {
			const { onSuccess, data } = call

			const authToken = _get(getState(), 'session.authToken')
			const userProfile = _get(getState(), 'session.profile')

			const streamType = userProfile.Id ? 'MAIN' : 'TRIAL'

			const mediaPlayInfo = _get(await api.getMediaPlayInfo({ data: { ...data, streamType }, authToken }), 'data')
			onSuccess && onSuccess(mediaPlayInfo)
		} catch (e) {
			const errMessage = _get(e, 'response.data.Message', 'Connection problem')
			const { onError } = call
			onError && onError(errMessage)
		}
	}
}
