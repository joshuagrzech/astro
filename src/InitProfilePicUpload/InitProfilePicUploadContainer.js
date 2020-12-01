import {connect} from 'react-redux'
import {InitProfilePic} from './InitProfilePicUploadComponent'

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    onSignIn: (value) => {
        dispatch({type: 'signIn', payload: true})
    },
    setBirthdate: (value) => {
        dispatch({type: 'setBirthdate', payload: value})
    }     
})




export default connect(mapStateToProps, mapDispatchToProps)(InitProfilePic)