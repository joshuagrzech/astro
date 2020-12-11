import React from 'react';
import {
  SharedElementTransition,
  nodeFromRef,
} from 'react-native-shared-element';
import {View, StyleSheet, Dimensions, Animated, PanResponder} from 'react-native';
import {animated, useSpring, config} from 'react-spring'

export function SharedTransitionParent(props) {

    const AnimatedView = animated(View)
    constScene1View

      set({position: props.progress})


  var {width} = Dimensions.get('window');
  
  return (
    <>
      <View style={{flex: 1}}>
        <AnimatedView
          
          style={{
            ...StyleSheet.absoluteFillObject,
            transform: [{translateX: -width * progress}],
          }}>
          {props.children[0]}
        </AnimatedView>

        {props.isScene2Visible ? (
          <AnimatedView
          
            style={{
              ...StyleSheet.absoluteFillObject,
              transform: [
                {
                  translateX: -width * (progress - 1),
                },
              ],
            }}>
            {props.children[1]}
          </AnimatedView>
        ) : undefined}
      </View>
      {props.isInProgress ? (
        <AnimatedView style={styles.sharedElementOverlay} pointerEvents="none">
          <SharedElementTransition
            start={{
              node: props.scene1Node,
              ancestor: props.scene1Ancestor,
            }}
            end={{
              node: props.scene2Node,
              ancestor: props.scene2Ancestor,
            }}
            position={progress}
            animation="move"
            resize="auto"
            align="auto"
          />
        </AnimatedView>
      ) : undefined}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  scene: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scene2: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sharedElementOverlay: {
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 1,
    flex: 1.5,
    height: '100%',
    alignItems: 'center',
    padding: '1%',
    borderRadius: 100,
    ...StyleSheet.absoluteFillObject,
  },
});
