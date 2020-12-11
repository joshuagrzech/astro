import {
    SharedElement,
    SharedElementTransition,
    nodeFromRef,
  } from 'react-native-shared-element';
import {View} from 'react-native'
export function SharedTransitionElement() {
  return (
    <View
      style={props.style}
      ref={props.onSetScene1Ref}>
      <SharedElement onNode={(node) => this.setState({scene1Node: node})}>
        {this.props.children}
      </SharedElement>
    </View>
  );
}

