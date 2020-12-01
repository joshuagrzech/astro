import {connect} from 'react-redux'
import { SunExplainer } from './sunExplainer'

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(SunExplainer)