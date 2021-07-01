import React, { useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import LoginForm from '../../components/Forms/LoginForm'
import './style.css'

const LoginContainer = ({ loginAction }) =>  {
	const [loading, setLoading] = useState(false)
	const [errMessage, setErrMessage] = useState('')

	const history = useHistory()

	const handleSubmit = async (data) => {
		setLoading(true)

		const onSuccess = () => {
			history.push('/home')
		}

		const onError = errMessage => {
			setErrMessage(errMessage)
			setLoading(false)
		}

   	const call = {
   		data,
   		onSuccess,
   		onError
   	}

   	await loginAction(call)
	}

   	return  (
   		<div className="formContainer">
   			<h1 className="formContainer__h1">Zaloguj się</h1>
   			<LoginForm onSubmit={handleSubmit} loading={loading} errMessage={errMessage}/>
   		</div>
   	)
}

export default  withRouter(LoginContainer)
