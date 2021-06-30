import { connect } from 'react-redux'
import HomeContainer from './HomeContainer'
import { getMediaListsAction } from '../../redux/reducers/session/actions'

const mapDispatchToProps = {
	getMediaListsAction
}

export default connect(
	null,
	mapDispatchToProps,
)(HomeContainer)
