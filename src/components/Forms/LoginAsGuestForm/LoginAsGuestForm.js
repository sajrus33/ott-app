import React from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import Button from '../../UI/Buttons/Button'
import '../../../styles/form.css'


const LoginAsGuestForm = ({ handleSubmit, preloading, errMessage }) => 
	(
		<form className="form" onSubmit={handleSubmit}>
			<Button type="submit" disabled={preloading} loading={preloading} customStyle={{ width: '100%' }}>
        Zaloguj się jako gość
			</Button>
			{errMessage && <p className="form__error">{errMessage}</p>}
			<div className="divider" />
			<Link to="/login">
				<Button disabled={preloading} loading={preloading} customStyle={{ width: '100%' }}>
       		Zaloguj się 
				</Button>
			</Link>
		</form>
	)


export default reduxForm({
	form: 'loginAsGuestForm'
})(LoginAsGuestForm)