import { connect } from 'react-redux'
import PlayerContainer from './PlayerContainer'
import { getMediaPlayInfoAction } from '../../redux/reducers/session/actions'

const mapDispatchToProps = {
	getMediaPlayInfoAction
}

export default connect(
	null,
	mapDispatchToProps
)(PlayerContainer)