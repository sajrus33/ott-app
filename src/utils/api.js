import axios from 'axios'
import queryString from 'query-string'

// CONFIG
const serverUrl = process.env.REACT_APP_SERVER_URL

const customAxios = host =>
	axios.create({
		baseURL: host,
		timeout: 60000
	})

const authorizationHeader = token => ({
	Authorization: `Bearer ${token}`
})

const createApiUrl = (host, pathArr, query) => {
	const stringified = queryString.stringify(query)
	let queryUrl = `${host}/${pathArr.join('/')}`
	if (stringified.length) queryUrl += '?' + stringified
	return queryUrl
}

const api = {
	axios,
	getMediaList({ data, authToken }) {
		return customAxios(serverUrl)({
			requestId: 'getMediaList',
			method: 'post',
			headers: authorizationHeader(authToken),
			url: createApiUrl(serverUrl, ['Media', 'GetMediaList']),
			data
		})
	},
	getMediaPlayInfo({ data, authToken }) {
		return customAxios(serverUrl)({
			requestId: 'getMediaPlayInfo',
			method: 'post',
			headers: authorizationHeader(authToken),
			url: createApiUrl(serverUrl, ['Media', 'GetMediaPlayInfo']),
			data
		})
	},
	login({ data }) {
		return customAxios(serverUrl)({
			requestId: 'login',
			method: 'post',
			url: createApiUrl(serverUrl, ['Authorization', 'SignIn']),
			data
		})
	}
}

export default api
