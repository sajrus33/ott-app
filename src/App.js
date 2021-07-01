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


class App extends Component {
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
