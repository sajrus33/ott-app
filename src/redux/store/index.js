import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import reduxThunk from 'redux-thunk'
import sessionReducer from '../reducers/session/reducer'

const reducers = {
	session: sessionReducer,
	form: formReducer
}
const combinedReducer = combineReducers(reducers)

const store = createStore(
	combinedReducer,  
	compose(
		applyMiddleware(reduxThunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	))

export default store
