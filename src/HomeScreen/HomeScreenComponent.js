import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Story from 'react-native-story';
import Passport from '../Passport/PassportContainer';
import styles from '../stylesheet';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Passport user={this.props}/>
        </View>
        <View style={{flex: 3}}>

        </View>
      </SafeAreaView>
    );
  }
}
