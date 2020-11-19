import {connect} from 'react-redux'
import { SunExplainer } from './sunExplainer'

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps)(SunExplainer)