import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from '../../UI/Inputs/Input'
import Button from '../../UI/Buttons/Button'
import '../../../styles/form.css'

const required = value => value ? undefined : ''
const isEmail = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
	'Błędny adres e-mail' : undefined
const passwordLength = value => value && value.length >= 8 ? undefined : 'Hasło jest za kórtkie'

const LoginForm = ({ handleSubmit, pristine, loading, errMessage, valid }) => {
	return (
		<form className="form" onSubmit={handleSubmit}>
			<Field
				name="email"
				component={Input}
				type="email"
				placeholder="E-mail"
				validate={[required, isEmail]}
			/>
			<Field
				name="password"
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
}

export default reduxForm({
	form: 'loginForm'
})(LoginForm)