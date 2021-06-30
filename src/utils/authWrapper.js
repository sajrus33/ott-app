import api from './api'
import _get from 'lodash/get'
import store from '../redux/store'
import { setUserProfile, setUserTokens } from '../redux/reducers/session/actions'

const authWrapper = ({ data, isXHR }) => async cb => {
	const accessTokens = _get(store.getState(), 'session.accessTokens', {})
	const { accessToken, refreshToken } = accessTokens
	console.log({accessToken, refreshToken})
	const res = await cb({ data, accessToken, refreshToken }).catch(async err => {
		if (err.response.status === 401 || isXHR) {
			console.log('is 401 error now try to get new tokens')
			try {
				const userTokensRes = await api.getUserTokens({ data: { refreshToken } })
				const userTokens = _get(userTokensRes, 'data', {})

				const res = await cb({ data, accessToken: userTokens.accessToken })
				store.dispatch(setUserTokens(userTokens))

				return res
			} catch (err) {
				store.dispatch(setUserProfile({}))
			}
		} else {
			const errMessage = _get(err, 'response.data.message', _get(err, 'response.data', 'Connection problem'))
			throw new Error(errMessage)
		}
	})
	if (res) return res
}

export default authWrapper
