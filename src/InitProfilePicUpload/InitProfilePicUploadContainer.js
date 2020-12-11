import {connect} from 'react-redux'
import {InitProfilePic} from './InitProfilePicUploadComponent'



const mapDispatchToProps = dispatch => ({
    setSceneTransitionElement: (value) => {
        dispatch({type: 'setSceneTransitionElement', payload: value})
    }
})




export default connect(null, mapDispatchToProps)(InitProfilePic)