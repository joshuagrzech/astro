import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import UsernameSet from '../UsernameSet/UsernameSetContainer';

import * as Animatable from 'react-native-animatable';
import {SharedElement, nodeFromRef} from 'react-native-shared-element';
import {renderComponent} from 'recompose';

export class InitUsername extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomName: null,
    };
    this.setScene4Ref = this.setScene4Ref.bind(this);
    this.setScene4NodeFunction = this.setScene4NodeFunction.bind(this);
  }

  setScene4Ref(ref) {
    if (this.props.isRef4 === false) {
      this.props.scene4ref(nodeFromRef(ref));
    }
  }

  setScene4NodeFunction(node) {
    if (this.props.isRef4 === false) {
      this.props.scene4Node(node);
    }
  }

  render() {
    return (
      <SafeAreaView
        style={{alignContent: 'center', alignItems: 'center', flex: 1}}>
        <Text
          style={{
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
          }}>
          Lookin' good!
        </Text>
        <Text
          style={{
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
          }}>
          Now a username.
        </Text>

        <Animatable.View
          animation="slideInRight"
          delay={1000}
          style={{marginTop: '10%', flex: 1}}>
          <UsernameSet randomName={this.state.randomName} />
        </Animatable.View>
        <View
          style={{overflow: 'hidden', flex: 2, padding: '31%'}}
          ref={(ref) => this.setScene4Ref(ref)}>
          <SharedElement
            style={{flex: 1}}
            onNode={(node) => this.setScene4NodeFunction(node)}>
            <Image
              style={{
                height: 240,
                width: 240,
                borderRadius: 300,
                flex: 1,
                alignSelf: 'center',
                overflow: "hidden"
              }}
              resizeMode="cover"
              source={{uri: `${this.props.profilePic}`}}
            />
          </SharedElement>
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
    flex: 1,
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
