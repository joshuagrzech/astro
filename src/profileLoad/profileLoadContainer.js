import {connect} from 'react-redux'
import {ProfileLoad} from './profileLoad'

const mapStateToProps = state => ({
    profileLoaded: state.profileLoaded
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



export default connect(mapStateToProps, mapDispatchToProps)(PersonalSun)