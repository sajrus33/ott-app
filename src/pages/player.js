import React, { Component } from 'react'
import Layout from '../components/Layout'
import PlayerContainer from '../containers/PlayerContainer'

class PlayerPage extends Component  {
	render() {
		return (
			<Layout>
				<PlayerContainer />
			</Layout>
		)
	}
}

export default PlayerPage