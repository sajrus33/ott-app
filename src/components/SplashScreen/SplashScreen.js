import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoginAsGuestForm from '../Forms/LoginAsGuestForm'
import './style.css'

const SplashScreen = ({ loginAsGuestAction }) => {
	const history = useHistory()
	const [preloading, setPreloading] = useState(false)
	const [errMessage, setErrMessage] = useState('')


	const handleSubmit = async() => {
		setPreloading(true)

		const onSuccess = () => {
			setPreloading(false)
			history.push('/home')
		}
		const onError = errMessage => { 
			setErrMessage(errMessage) 
			setPreloading(false)
		}

		const call = {
			onSuccess,
			onError
		}
		await loginAsGuestAction(call)
	}

	return (
		<div className="splashScreen">
			<img src="/player-logo.png" alt="player logo" className="splashScreen__img"></img>
			<LoginAsGuestForm onSubmit={handleSubmit} preloading={preloading} errMessage={errMessage} />
		</div>
	)
}

export default SplashScreen
