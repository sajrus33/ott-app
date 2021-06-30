import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import Login from './pages/login'
import Player from './pages/player'
import Home from './pages/home'
import SplashScreen from './pages/splashScreen'
import NotFound from './pages/notFound'
// import store from './redux/store'
// import api from './utils/api'
// import {
//   setUserTokens,
//   setUserProfile,
// } from './redux/reducers/session/actions'

class App extends Component {
	async componentDidMount() {
		// try {
		//   const refreshToken = localStorage.getItem("refreshToken")
		//   if(refreshToken){
		//     const userTokensRes = await api.getUserTokens({ data: { refreshToken } })
		//     if (userTokensRes) {
		//       const userTokens = _get(userTokensRes, 'data', {})
		//       store.dispatch(setUserTokens(userTokens))
		//       const userProfile = _get(await api.getProfile({ accessToken: userTokens.accessToken }), 'data.userProfile')
		//       await store.dispatch(setUserProfile(userProfile))
		//     }
		//   }
		// } catch (err) {
		//   console.log(err)
		// }
	}
  
	render(){
		return (
			<Router>
				<Switch>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path={'/player/:id'}>
						<Player />
					</Route>
					<Route exact path="/home">
						<Home />
					</Route>
					<Route exact path="/">
						<SplashScreen />
					</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Router>
		)
	}
}

export default App
