import { connect } from 'react-redux'
import LoginContainer from './LoginContainer'
import { loginAction } from '../../redux/reducers/session/actions'


const mapDispatchToProps = {
	loginAction
}
export default connect(
	null,
	mapDispatchToProps
)(LoginContainer)