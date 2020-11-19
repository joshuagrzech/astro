import {connect} from 'react-redux'
import {InitStarSign} from './initialStarSign'

const mapStateToProps = state => ({
    introduced: state.introduced,
    signedIn: state.signedIn,
    profile: state.profile,
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    setBirthdate: (value) => {
        dispatch({type: 'setBirthdate', payload: value})
    },
    profileBirth: (value) => {
        dispatch({type: 'profileBirth', payload: value})
    }     
})



export default connect(mapStateToProps, mapDispatchToProps)(InitStarSign)