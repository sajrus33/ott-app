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
			const onError = () => {
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
					<h1 className="home__h1">Filmy</h1>
					<div className="home__wrapper">
						<div className="home__list">
							{mediaList1.map(media=> 
								<MediaCard media={media} key={media.Guid}/>
							)}
						</div>
						<div className="home__list">
							{mediaList2.map(media=> 
								<MediaCard media={media} key={media.Guid}/>
							)}
						</div>
					</div>
  				</div>
  			}
  		</>
  	)
}

export default HomeContainer
