import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router'
import CircleLoader from 'react-spinners/CircleLoader'
import ReactPlayer from 'react-player'
import './style.css'

const PlayerContainer = ({ getMediaPlayInfoAction, location }) => {
	const [preloading, setPreloading] = useState(true)
	const [mediaPlayInfo, setMediaPlayInfo] = useState({})

	const history = useHistory()

	useEffect(()=>{
		const getMediaPlayInfo = async()=> {
			const urlArray = location.pathname.split('/')
			const mediaId = urlArray[urlArray.length - 1]
	
			const onSuccess = mediaPlayInfo => {
				setMediaPlayInfo(mediaPlayInfo)
				setPreloading(false)
			}
			const onError = errMessage => {
				history.push('/')
			}

			const call = {
				data: {
					mediaId: Number(mediaId)
				},
				onSuccess,
				onError
			}
	
			await getMediaPlayInfoAction(call)
		}

		getMediaPlayInfo()
	}, [])

  	
  	return (
  		<>
  			{preloading ? <div className="preloader">
  				<CircleLoader color="var(--blue)" size={32}/>
  			</div> : 
  				<div className="player">
  					<ReactPlayer controls width="100%" height="100%" url={mediaPlayInfo.ContentUrl}/>
  				</div>
  			}
  		</>
  	)
}

export default withRouter(PlayerContainer)
