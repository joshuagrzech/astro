import {connect} from 'react-redux'
import {AppIntro} from './AppIntro'

const mapDispatchToProps = dispatch => ({
    onDone: (value) => {
        dispatch({type: 'introduced', payload: true})
    }, 
})

export default connect(null, mapDispatchToProps)(AppIntro)