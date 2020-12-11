import React from 'react';

import {SharedElement, nodeFromRef} from 'react-native-shared-element';
import {
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
  PanResponder,
  Dimensions,
  Animated,
} from 'react-native';
import MoonIcon from '../animations/moonIcon';
import SunIcon from '../animations/sunIcon';
import AscendingIcon from '../animations/ascendingIcon';
import otherStyles from '../stylesheet';
import {Card} from 'react-native-shadow-cards';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

import {NavigationContainer, NavigationContext} from '@react-navigation/native';

import {PanGestureHandler} from 'react-native-gesture-handler';

import SharedTransitionScreen from '../SharedTransitions/SharedTransitionScreenContainer';
import {InitProfilePic} from '../InitProfilePicUpload/InitProfilePicUploadComponent';

export class PassportIntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inProgress: false,
      progress: new Animated.Value(0),
    };
    this.setScene1NodeFunction = this.setScene1NodeFunction.bind(this);
    this.setScene1Ref = this.setScene1Ref.bind(this);
    this._onHandlerStateChange = (event) => {
      if (event.nativeEvent.state === 4) {
        this.setState({inProgress: true});
        Animated.timing(this.state.progress, {
          toValue: 1,
          duration: 250,
        });
      }
    };
  }

  setScene1NodeFunction = (node) => {
    if (this.props.isRef === false) {
      this.props.scene1Node(node);
    }
  };

  setScene1Ref = (ref) => {
    if (this.props.isRef === false) {
      this.props.scene1Ref(nodeFromRef(ref));
    }
  };

  render() {
    const {width} = Dimensions.get('window');

    return (
      <SafeAreaView
        style={{
          height: '100%',
          width: '100%',
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
          display: 'flex',
          marginTop: '25%',
        }}>
        <Animatable.Text
          easing="ease-in-out-quint"
          style={{
            flex: 0.25,
            marginTop: '3%',
            fontSize: 45,
            padding: '5%',
            marginHorizontal: '8%',
            fontFamily: 'STHeitiTC-Medium',
            textAlign: 'center',
            color: 'white',
            textShadowOffset: {width: 20, height: 20},
            textShadowColor: 'black',
            textShadowRadius: 3,
          }}
          animation="bounceIn">
          Welcome!
        </Animatable.Text>
        <Animatable.View
          easing="ease-in-out-quint"
          style={{
            marginTop: '10%',
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
          animation="bounceIn"
          delay={250}>
          <View
            style={{
              shadowOffset: {width: 2, height: 4},
              shadowOpacity: 0.9,
              shadowRadius: 5,
              elevation: 1,
              flex: 1.5,
              height: '100%',
              alignItems: 'center',
              width: '100%',

              alignContent: 'center',
            }}>
            <Animatable.View
              animation="bounceIn"
              style={{
                alignItems: 'center',
                alignContent: 'center',
                height: 100,
                width: 100,
                borderRadius: 80,
              }}>
              <View
                style={{
                  ...styles.scene,
                  alignContent: 'center',
                  alignItems: 'center',
                }}
                ref={(ref) => this.setScene1Ref(ref)}>
                <SharedElement
                  onNode={(node) => this.setScene1NodeFunction(node)}>
                  <Image
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 80,
                      alignContent: 'center',
                    }}
                    resizeMode="cover"
                    source={require('../assets/selectimage-01.png')}
                  />
                </SharedElement>
              </View>
            </Animatable.View>
          </View>
        </Animatable.View>

        <Animatable.Text
          easing="ease-in-out-quint"
          animation="slideInRight"
          delay={1500}
          style={{
            flex: .5,
            marginTop: '3%',
            fontSize: 30,
            marginHorizontal: '8%',
            fontFamily: 'STHeitiTC-Medium',
            textAlign: 'center',
            color: 'white',
            textShadowOffset: {width: 20, height: 20},
            textShadowColor: 'black',
            textShadowRadius: 5,
          }}>
          Let's build your profile!
        </Animatable.Text>
        <Animatable.Text
          easing="ease-in-out-quint"
          animation="slideInRight"
          delay={1500}
          style={{
            flex: .5,
            
            fontSize: 25,
            marginHorizontal: '8%',
            fontFamily: 'STHeitiTC-Medium',
            textAlign: 'center',
            color: 'white',
            textShadowOffset: {width: 20, height: 20},
            textShadowColor: 'black',
            textShadowRadius: 5,
          }}>
          We'll begin your journey by finding your Sun Sign.
        </Animatable.Text>

        <LottieView
          autoPlay
          loop
          style={{
            
            width: 200,
            height: 200,
            flex: 1
          }}
          color={'green'}
          resizeMode="contain"
          source={require('./11516-swipe-left-arrows.json')}
        />
      </SafeAreaView>
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
