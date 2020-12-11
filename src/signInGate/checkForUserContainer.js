
import {connect} from 'react-redux'
import CheckForUser from './checkForUser'



const mapDispatchToProps = dispatch => ({
    userData: (value) => {
        dispatch({type: 'userData', payload: value})
    }    
})    





export default connect(null, mapDispatchToProps)(CheckForUser)