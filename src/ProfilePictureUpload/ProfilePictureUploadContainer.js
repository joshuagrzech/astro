import {connect} from 'react-redux'
import {ProfilePictureUpload} from './ProfilePictureUploadComponent'

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    setProfilePicture: (value) => {
        dispatch({type: 'setProfilePicture', payload: value})
    },
    setBirthdate: (value) => {
        dispatch({type: 'setBirthdate', payload: value})
    }     
})




export default connect(mapStateToProps, mapDispatchToProps)(ProfilePictureUpload)