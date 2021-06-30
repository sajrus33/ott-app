import React, { Component } from 'react'
import BounceLoader from 'react-spinners/BounceLoader'
import ReactPlayer from 'react-player'
import './style.css'

class PlayerContainer extends Component {
  state = {
  	preloading: true,
  	mediaPlayInfo: {}
  }

  async componentDidMount(){
  	const { getMediaPlayInfo } = this.props

  	// TODO use withRouter to pass query param in props
  	const urlArray = window.location.href.split('/')
  	const mediaId = urlArray[urlArray.length - 1]
  	console.log({mediaId})

  	const call = {
  		data: {
  			mediaId: Number(mediaId)
  		},
  		onSuccess: mediaPlayInfo => this.setState({ preloading: false, mediaPlayInfo })
  	}

  	await getMediaPlayInfo(call)
  }

  render() {
  	const { preloading, mediaPlayInfo } = this.state
  	console.log({ mediaPlayInfo })
  	return (
  		<>
  			{preloading ? <div className="preloader">
  				<BounceLoader color="var(--orange)" size={32}/>
  				<BounceLoader color="var(--red)" size={32}/>
  				<BounceLoader color="var(--blue)" size={32}/>
  			</div> : 
  				<div className="player">
  					<ReactPlayer controls width="100%" height="100%" url={mediaPlayInfo.ContentUrl}/>
  				</div>
  			}
  		</>
  	)
  }
}

export default PlayerContainer
