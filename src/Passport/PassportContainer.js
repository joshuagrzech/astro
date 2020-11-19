import {connect} from 'react-redux'
import {Passport} from './PassportComponent'

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



export default connect(mapStateToProps, mapDispatchToProps)(Passport)