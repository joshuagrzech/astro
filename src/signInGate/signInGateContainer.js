import {connect} from 'react-redux'
import SignInGate from './signInGateComponent'

const mapStateToProps = state => ({
    stateUser: state.user
})

const mapDispatchToProps = dispatch => ({
    userData: (value) => {
        dispatch({type: 'userData', payload: value})
    }        
})    





export default connect(mapStateToProps, mapDispatchToProps)(SignInGate)