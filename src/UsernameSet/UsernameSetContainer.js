import {connect} from 'react-redux'
import {UsernameSet} from './UsernameSetComponent'

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    setUsername: (value) => {
        dispatch({type: 'setUsername', payload: value})
    }     
})




export default connect(mapStateToProps, mapDispatchToProps)(UsernameSet)