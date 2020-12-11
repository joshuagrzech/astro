import React, {useReducer} from 'react';
import {View, Animated, StyleSheet, Dimensions, Easing} from 'react-native';
import {useSpring, animated} from 'react-spring';
import {SharedElementTransition} from 'react-native-shared-element';
import {InitProfilePic} from '../InitProfilePicUpload/InitProfilePicUploadComponent';
import {PassportIntroScreen} from '../PassportIntro/PassportIntroComponent';
import {SharedTransitionScreen} from '../SharedTransitions/SharedTransitionScreen';
import {PanGestureHandler} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native'
import {InitUsername} from '../InitUsernameSet/InitUsernameSetComponent'
import LinearGradient from 'react-native-linear-gradient'

export default function PassportToProfilePic(props) {
  let progress = new Animated.Value(0)
  const {width, height} = Dimensions.get('window');
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const onGestureEvent = Animated.event(
    [{nativeEvent: {translationX: progress}}],
    {
      useNativeDriver: true,
      listener: () => {
        if (inProgress === false) {
          setInProgress(true);
        }
      },
    },
  );

  const onHandlerStateChange = (event) => {
    console.log(event.nativeEvent);
    if (event.nativeEvent.state === 2) {
      setInProgress(true);
      setIsScene2Visible(true);
    } else if (event.nativeEvent.state === 5) {
      Animated.timing(progress, {
        toValue: -width,
        useNativeDriver: true,
        duration: 1000,
        easing: Easing.in(Easing.elastic(4)),
      }).start();
      setTimeout(() => {
        
        setInProgress(false);
        setIsScene1Visible(false);
        
      }, 1200);
    }
  };

  

  const AnimatedInProgress = Animated.createAnimatedComponent(
    SharedTransitionScreen,
  );
  const [scene3Ref, setScene3Ref] = React.useState(null);
  const [scene4Ref, setScene4Ref] = React.useState(null);
  const [scene3Node, setScene3Node] = React.useState(null);
  const [scene4Node, setScene4Node] = React.useState(null);
  const [inProgress, setInProgress] = React.useState(false);
  const [isScene2Visible, setIsScene2Visible] = React.useState(false);
  const [isScene1Visible, setIsScene1Visible] = React.useState(true);
const [profilePic, setProfilePic] = React.useState(null)

  return (
    <>
    
      {isScene1Visible ? (
          <PanGestureHandler
          activeOffsetX={-414, -2}
            onHandlerStateChange={onHandlerStateChange}
            onGestureEvent={onGestureEvent}>
            <Animated.View
              style={{
                ...StyleSheet.absoluteFillObject,
                transform: [{translateX: progress}],
                backgroundColor: 'transparent'
              }}>
                  
                  <InitProfilePic
              scene3ref={setScene3Ref}
              scene3node={setScene3Node}
              scene2ref={props.scene2ref}
              scene2Node={props.scene2Node}
              isRef2={props.isRef2}
              isRef3={scene3Ref ? true : false}
              setProfilePic={setProfilePic}
            />
            </Animated.View>
          </PanGestureHandler>
      ) : undefined}
      
      {isScene2Visible ? (
        
          <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              transform: [
                {
                  translateX: progress,
                },
              ],
            }}>
            <InitUsername scene4ref={setScene4Ref}
              scene4Node={setScene4Node} 
              isRef4={scene4Ref ? true : false}
              profilePic={profilePic}/>
          </Animated.View>
        
      ) : undefined}
      {inProgress ? (
          <>
          <LinearGradient style={{height: height, width: width, flex: 1, position: 'absolute'}} colors={['#000000', '#340852']}/>
        <SharedElementTransition
        style={styles.sharedElementOverlay}
          start={{
            node: scene3Node,
            ancestor: scene3Ref,
          }}
          end={{
            node: scene4Node,
            ancestor: scene4Ref,
          }}
          position={Animated.multiply(progress, -0.0024)}
          animation="fade"
          resize="auto"
          align="auto"
        />
        </>
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
  image1: {
    resizeMode: 'cover',
    width: 160,
    height: 160,
    // Images & border-radius have quirks in Expo SDK 35/36
    // Uncomment the next line when SDK 37 has been released
    //borderRadius: 80
  },
  image2: {
    resizeMode: 'cover',
    width: 300,
    height: 300,
    borderRadius: 0,
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
