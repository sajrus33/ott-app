import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CircleLoader from 'react-spinners/CircleLoader'
import MediaCard from '../../components/MediaCard'
import './style.css'


const HomeContainer = ({ getMediaListsAction }) => {
	const [preloading, setPreloading] = useState(true)
	const [mediaList1, setMediaList1] = useState([])
	const [mediaList2, setMediaList2] = useState([])

	const history = useHistory()

	useEffect(()=> {
		const getMediaList = async () => {
			const onSuccess = ({ mediaList1, mediaList2 }) => {
				setMediaList1(mediaList1)
				setMediaList2(mediaList2)
				setPreloading(false)
			}
			const onError = ({ mediaList1, mediaList2 }) => {
				history.push('/')
			}

			const call = {
				onSuccess,
				onError
			}
			await getMediaListsAction(call)
		}

		getMediaList()
	}, [])

  	return (
  		<>
  			{preloading ? 
  				<div className="preloader">
  					<CircleLoader color="var(--blue)" size={32}/>
  				</div> : 
  				<div className="home">
					{mediaList1.map(media=> 
						<MediaCard media={media} key={media.Guid}/>
					)}
					{mediaList2.map(media=> 
						<MediaCard media={media} key={media.Guid}/>
					)}
  						{/* {mediaList1.map(media => media)} */}
  						{/* {mediaList2.map(media => media)} */}
  				</div>
  			}
  		</>
  	)
}

export default HomeContainer
