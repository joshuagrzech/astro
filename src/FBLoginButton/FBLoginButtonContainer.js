import {connect} from 'react-redux'
import {FBLoginButton} from './FBLoginButton'

const mapStateToProps = state => ({
    birthdate: state.birthdate,
    profile: state.profile,
    signedIn: state.signedIn,
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    onSignIn: (value) => {
        dispatch({type: 'signIn', payload: value})
    },
    userData: (value) => {
        dispatch({type: 'userData', payload: value})
    }     
})

export default connect(mapStateToProps, mapDispatchToProps)(FBLoginButton)