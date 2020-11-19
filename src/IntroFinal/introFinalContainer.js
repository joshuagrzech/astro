import {connect} from 'react-redux'
import {IntroFinal} from './introFinal'

const mapStateToProps = state => ({
    birthdate: state.birthdate,
    profile: state.profile,
    user: state.user,
})

const mapDispatchToProps = dispatch => ({
    setBirthdate: (value) => {
        dispatch({type: 'setBirthdate', payload: value})
    },
    profileBirth: (value) => {
        dispatch({type: 'profileBirth', payload: value})
    },
    setSunSign: (value) => {
        dispatch({type: 'setSunSign', payload: value})
    },
    markSetupComplete: (value) => {
        dispatch({type: 'markSetupComplete', payload: value})
    },
    userData: (value) => {
        dispatch({type: "userData", payload: value})
    }      
})

export default connect(mapStateToProps, mapDispatchToProps)(IntroFinal)