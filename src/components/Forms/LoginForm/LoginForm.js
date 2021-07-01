import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from '../../UI/Inputs/Input'
import Button from '../../UI/Buttons/Button'
import '../../../styles/form.css'

const required = value => value ? undefined : ''
const passwordLength = value => value && value.length >= 8 ? undefined : 'Hasło jest za kórtkie'

const LoginForm = ({ handleSubmit, pristine, loading, errMessage, valid }) => 
	(
		<form className="form" onSubmit={handleSubmit}>
			<Field
				name="Username"
				component={Input}
				type="text"
				placeholder="Username"
				validate={[required]}
			/>
			<Field
				name="Password"
				component={Input}
				type="password"
				placeholder="Hasło"
				validate={[passwordLength, required]}
			/>
			<Button type="submit" disabled={pristine || loading || !valid} loading={loading} customStyle={{ width: '100%' }}>
        Zaloguj się
			</Button>
			{errMessage && <p className="form__error">{errMessage}</p>}
		</form>
	)

export default reduxForm({
	form: 'loginForm'
})(LoginForm)