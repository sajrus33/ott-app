import { connect } from 'react-redux'
import PlayerContainer from './PlayerContainer'
import { getMediaPlayInfo } from '../../redux/reducers/session/actions'

const mapDispatchToProps = {
	getMediaPlayInfo
}

export default connect(
	null,
	mapDispatchToProps
)(PlayerContainer)