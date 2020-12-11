import React, {useState, useRef, useMemo} from 'react';

import {
  Easing,
  PanResponder,
  View,
  Dimensions,
  StyleSheet,
  Animated,
  NativeEventEmitter,
} from 'react-native';
import {SharedElementTransition} from 'react-native-shared-element';
import {SharedTransitionParent} from '../SharedTransitions/SharedTransitionParent';
import PassportIntroScreen from '../PassportIntro/PassportIntroComponent';
import InitialProfilePictureUpload from '../InitProfilePicUpload/InitProfilePicUploadContainer';
import {NavigationContainer} from '@react-navigation/native';
import {useSpring} from 'react-spring'
import {PanGestureHandler, State} from 'react-native-gesture-handler'

export class AppIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScene2Visible: false,
      isInProgress: false,
    }
    this.setScene1Ref = this.setScene1Ref.bind(this);
    this.setScene2Ref = this.setScene2Ref.bind(this);
    this.setScene1NodeFunction = this.setScene1NodeFunction.bind(this);
    this.setScene2NodeFunction = this.setScene2NodeFunction.bind(this);
    this.writeDone = this.writeDone.bind(this);
    this.writeDone2 = this.writeDone2.bind(this);
    
    this._onPanGestureEvent = () => {
     
    }
    this._onHandlerStateChange = (event) => {
      this.props.navigation.push('InProgress', {progress: progress})
      
    }
  }
  

  onPressNavigate = async () => {
    
  };

  setScene1Ref = (ref) => {
    if (this.props.sceneTransitionElements.scene1Ancestor === null) {
      this.props.setSceneTransitionElement({scene1Ancestor: ref});
    } else {
      return;
    }
  };

  setScene1NodeFunction = (node) => {
    if (this.props.sceneTransitionElements.scene1Node === null) {
      this.props.setSceneTransitionElement({scene1Node: node});
    } else {
      return;
    }
  };

  setScene2Ref = (ref) => {
    if (this.props.sceneTransitionElements.scene2Ancestor === null) {
      this.props.setSceneTransitionElement({scene2Ancestor: ref});
    } else {
      return;
    }
  };

  setScene2NodeFunction = (node) => {
    if (this.props.sceneTransitionElements.scene2Node === null) {
      this.props.setSceneTransitionElement({scene2Node: node});
    } else {
      return;
    }
  };

  writeDone() {
    if (this.props.sceneTransitionElements.scene1Ancestor !== null) {
      return true;
    }
  }

  writeDone2() {
    if (this.props.sceneTransitionElements.scene2Ancestor !== null) {
      return true;
    }
  }

  
  
  render() {
    const { state } = this;
    const {width} = Dimensions.get('window');
    
    return (
      <>
      <PanGestureHandler onHandlerStateChange={this._onHandlerStateChange} onGestureEvent={this._onPanGestureEvent}>
        
          <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              transform: [
                {translateX: Animated.multiply(-width, state.progress)},
              ],
            }}>
            <PassportIntroScreen
              setScene1Node={this.setScene1NodeFunction}
              setScene1Ancestor={this.setScene1Ref}
              writeDone={this.writeDone()}
            />
          </Animated.View>
          </PanGestureHandler>
          {state.isScene2Visible ? (
            <Animated.View
              style={{
                ...StyleSheet.absoluteFillObject,
                flex: 1,
                transform: [
                  {
                    translateX: Animated.multiply(
                      -width,
                      Animated.add(state.progress, -1),
                    ),
                  },
                ],
              }}>
              <InitialProfilePictureUpload
                setScene2Node={this.setScene2NodeFunction}
                setScene2Ancestor={this.setScene2Ref}
                writeDone={this.writeDone2()}
              />
            </Animated.View>
          ) : undefined}
        
        
        {state.isInProgress ? (
          <View style={styles.sharedElementOverlay} pointerEvents="none">
            <SharedElementTransition
              start={{
                node: this.props.sceneTransitionElements.scene1Node,
                ancestor: this.props.sceneTransitionElements.scene1Ancestor,
              }}
              end={{
                node: this.props.sceneTransitionElements.scene2Node,
                ancestor: this.props.sceneTransitionElements.scene2Ancestor,
              }}
              position={state.progress}
              animation="move"
              resize="auto"
              align="auto"
            />
          </View>
        ) : undefined}
      </>
    );
  }
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
