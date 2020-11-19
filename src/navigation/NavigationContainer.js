import {connect} from 'react-redux'
import {AppNavigator} from '../navigation/navigation'

const mapStateToProps = state => ({
    introduced: state.introduced,
    signedIn: state.signedIn,
    profile: state.profile,
    birthdate: state.birthdate,
    setupComplete: state.setupComplete,
    stateUser: state.user
})

const mapDispatchToProps = dispatch => ({
    onSignIn: (value) => {
        dispatch({type: 'signIn', payload: true})
    },
    setBirthdate: (value) => {
        dispatch({type: 'setBirthdate', payload: value})
    },
    userData: (value) => {
        dispatch({type: 'userData', payload: value})
    },
    setSetupComplete: (value) => {
        dispatch({type: 'setupComplete', payload: value})
    }         
})




export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)