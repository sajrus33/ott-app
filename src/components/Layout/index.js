import { connect } from 'react-redux'
import Layout from './Layout'
import { logoutAction } from '../../redux/reducers/session/actions'

const mapStateToProps = ({ session }) => ({
	// userProfile: session.client.profile
})

const mapDispatchToProps = {
	logoutAction
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Layout)