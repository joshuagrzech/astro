import React from 'react'
import {SharedElementTransition} from 'react-native-shared-element'
import {Spring} from 'react-spring'

export class SharedTransitionScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    
    
    render() {
        console.log(this.props.progress)
        return(
            
                    <SharedElementTransition
              start={{
                node: this.props.scene1Node,
                ancestor: this.props.scene1ref,
              }}
              end={{
                node: this.props.scene2Node,
                ancestor: this.props.scene2ref,
              }}
              position={this.props.progress}
              animation="move"
              resize="auto"
              align="auto"
            />
                
        )
    }
}