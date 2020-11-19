import {connect} from 'react-redux'
import {Profile} from './Profile'

const mapStateToProps = state => ({
    birthdate: state.birthdate,
    profile: state.profile,
    signedIn: state.signedIn,
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    onSignOut: (value) => {
        dispatch({type: 'signOut', payload: value})
    },
    resetProfile: (value) => {
        dispatch({type: 'resetProfile', payload: value})
    }  
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)