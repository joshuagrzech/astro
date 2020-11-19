import {connect} from 'react-redux'
import {PersonalSun} from './personalSun'

const mapStateToProps = state => ({
    introduced: state.introduced,
    signedIn: state.signedIn,
    profile: state.profile
})





export default connect(mapStateToProps)(PersonalSun)