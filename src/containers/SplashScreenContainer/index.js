import { connect } from 'react-redux'
import SplashScreenContainer from './SplashScreenContainer'
import { loginAsGuestAction } from '../../redux/reducers/session/actions'

const mapDispatchToProps = {
	loginAsGuestAction
}

export default connect(
	null,
	mapDispatchToProps,
)(SplashScreenContainer)
