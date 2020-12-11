import React from 'react';
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from 'react-native-shared-element';
import {View, Animated} from 'react-native'

export default function SharedElementTransitionComponent(props) {
  const position = new Animated.Value(0);
  return (
    <View style={{height: '100%', width: '100%'}}>
      <SharedElementTransition
        start={{
          node: props.startNode,
          ancestor: props.startAncestor,
        }}
        end={{
          node: props.endNode,
          ancestor: props.endAncestor,
        }}
        position={position}
        animation="move"
        resize="auto"
        align="auto"
      />
    </View>
  );
}
