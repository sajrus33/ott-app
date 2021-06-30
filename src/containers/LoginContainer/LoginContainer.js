import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LoginForm from '../../components/Forms/LoginForm'
import '../../styles/formContainer.css'

class LoginContainer extends Component {
  state = {
  	loggedIn: false,
  	loading: false,
  	errMessage: ''
  }

   handleSubmit = async (data) => {
   	const { loginAction } = this.props

   	this.setState({ loading: true })

   	const call = {
   		data,
   		onSuccess: () => this.setState({ loggedIn: true, loading: false, errMessage: '' }),
   		onError: errMessage => this.setState({ loading: false, errMessage })
   	}

   	await loginAction(call)
   }

   render() {
   	const { loggedIn, loading, errMessage } = this.state
   	return ( loggedIn ? (
   		<Redirect to='/' />
   	) : (
   		<div className="formContainer">
   			<h1 className="formContainer__h1">Zaloguj się</h1>
   			<LoginForm onSubmit={this.handleSubmit} loading={loading} errMessage={errMessage}/>
   		</div>
   	)
   	)
   }
}

export default LoginContainer
