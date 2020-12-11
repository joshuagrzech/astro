import {connect} from 'react-redux'
import {SharedTransitionScreen} from './SharedTransitionScreen'

const mapStateToProps = state => ({
    sceneTransitionElements: state.sceneTransitionElements
})

const mapDispatchToProps = dispatch => ({
    setSceneTransitionElement: (value) => {
        dispatch({type: 'setSceneTransitionElement', payload: value})
    }
})




export default connect(mapStateToProps, mapDispatchToProps)(SharedTransitionScreen)