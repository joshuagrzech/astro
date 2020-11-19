import {connect} from 'react-redux'
import {PassportIntro} from './PassportIntroComponent'

const mapStateToProps = state => ({
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



export default connect(mapStateToProps, mapDispatchToProps)(PassportIntro)