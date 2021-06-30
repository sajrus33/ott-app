import React from 'react'
import { reduxForm } from 'redux-form'
import Button from '../../UI/Buttons/Button'
import '../../../styles/form.css'


const LoginAsGuestForm = ({ handleSubmit, preloading, errMessage }) => {
	return (
		<form className="form" onSubmit={handleSubmit}>
			<Button type="submit" disabled={preloading} loading={preloading} customStyle={{ width: '100%' }}>
        Zaloguj się jako gość
			</Button>
			{errMessage && <p className="form__error">{errMessage}</p>}
		</form>
	)
}

export default reduxForm({
	form: 'loginAsGuestForm'
})(LoginAsGuestForm)