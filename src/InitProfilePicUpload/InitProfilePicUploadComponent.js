import React from 'react';

import {SharedElement, nodeFromRef} from 'react-native-shared-element';
import {
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import ImagePicker from 'react-native-image-crop-picker';
import LottieView from 'lottie-react-native'

export class InitProfilePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: null
    }
    this.openImagePicker = this.openImagePicker.bind(this);
    this.setScene2Ref = this.setScene2Ref.bind(this);
    this.setScene2NodeFunction = this.setScene2NodeFunction.bind(this);
    
  }
  openImagePicker() {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
      includeBase64: true,
    }).then(async (res) => {
      if (res.data) {
        const newPic = res.data;
        this.setState({profilePic: newPic});
        this.props.setProfilePic(`data:image/png;base64,${newPic}`)
      }
    });
  }
  setScene2Ref(ref) {
    if (this.props.isRef2 === false) {
      this.props.scene2ref(nodeFromRef(ref));
    }
    if (this.props.isRef3 === false) {
      this.props.scene3ref(nodeFromRef(ref));
    }
  }

  setScene2NodeFunction(node) {
    if (this.props.isRef2 === false) {
      this.props.scene2Node(node);
    }
    if (this.props.isRef3 === false) {
      this.props.scene3node(node);
    }
  }

  

  render() {
    console.log(this.props);
    return (
      <SafeAreaView style={{flex: 1, height: '100%', width: '100%'}}>
        
        <Animatable.View animation="slideInRight" delay={1000} style={{flex: .5}}>
          <View style={{flex: 1, marginTop: '10%'}}>
            <Text style={{
            flex: 0.5,
            marginTop: '3%',
            fontSize: 30,
            padding: '1%',
            marginHorizontal: '8%',
            fontFamily: 'STHeitiTC-Medium',
            textAlign: 'center',
            color: 'white',
            textShadowOffset: {width: 1, height: 1},
            textShadowColor: 'black',
            textShadowRadius: 1,
          }}>First, a profile picture!</Text>
            <Text style={{
            flex: 0.25,
            marginTop: '3%',
            fontSize: 15,
            marginHorizontal: '8%',
            fontFamily: 'STHeitiTC-Medium',
            textAlign: 'center',
            color: 'white',
            textShadowOffset: {width: 1, height: 1},
            textShadowColor: 'black',
            textShadowRadius: 1,
          }}>
              This will only be seen by who you choose.
            </Text>
          </View>
        </Animatable.View>

        <View
          style={{
            shadowOffset: {width: 2, height: 4},
            shadowOpacity: 0.9,
            shadowRadius: 5,
            elevation: 1,
            flex: 1.5,
            height: '75%',
            alignItems: 'center',
            padding: 100,
            overflow: 'hidden',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',

              height: 300,
              width: 300,
              borderRadius: 80,
            }}
            onPress={this.openImagePicker}>
            <View style={styles.scene2} ref={(ref) => this.setScene2Ref(ref)}>
              <SharedElement
                onNode={(node) => this.setScene2NodeFunction(node)}>
                <Image
                  style={{
                    height: 300,
                    width: 300,
                    borderRadius: 80,
                  }}
                  resizeMode="cover"
                  source={this.state.profilePic ? {uri: `data:image/png;base64,${this.state.profilePic}`} : require('../assets/selectimage-01.png')}
                />
              </SharedElement>
            </View>
          </TouchableOpacity>
        </View>
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
