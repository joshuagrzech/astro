import {connect} from 'react-redux'
import ZodiacController from './zodiacController'

const mapStateToProps = state => ({
    birthdate: state.birthdate,
    profile: state.profile
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
    }      
})

export default connect(mapStateToProps, mapDispatchToProps)(ZodiacController)