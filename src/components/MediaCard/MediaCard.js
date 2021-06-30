import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const MediaCard = ({ media }) => {
	const [mediaFrame] = media.Images.filter(img=> img.ImageTypeCode === 'FRAME')
	return (
		<Link className="mediaCard" to={`/player/${media.Id}`}>
			<img className="mediaCard__img" src={mediaFrame.Url} alt={media.Title}></img>
		</Link>
	)
}

export default MediaCard
