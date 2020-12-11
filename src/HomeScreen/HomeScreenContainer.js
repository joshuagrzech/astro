import {connect} from 'react-redux'
import {HomeScreen} from './HomeScreenComponent'

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    onSignIn: (value) => {
        dispatch({type: 'signIn', payload: true})
    },
    setBirthdate: (value) => {
        dispatch({type: 'setBirthdate', payload: value})
    },
    setProfilePicture: (value) => {
        dispatch({type: 'setProfilePicture', payload: value})
    }     
})




export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)