import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import Passport from '../Passport/PassportContainer';
import styles from '../stylesheet';
import * as Animatable from 'react-native-animatable'

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', alignContent: 'center'}}>
        <Animatable.View animation="zoomIn" style={{flex: .9, alignItems: 'center', alignContent: 'center', marginTop: '10%'}}>
          <Passport />
        </Animatable.View>
        <View style={{flex: 3}}></View>
      </SafeAreaView>
    );
  }
}
