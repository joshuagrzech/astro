import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Passport } from '../Passport/PassportComponent';
import * as Animatable from 'react-native-animatable'
import styles from '../stylesheet';

export class IntroFinal extends React.Component {
  constructor(props) {
    super(props);
    this.completeSetup = this.completeSetup.bind(this);
    this.state = {
      spinner: false,
    };
  }
  

  completeSetup() {
    fetch('https://us-central1-astro-ee1e9.cloudfunctions.net/saveNewUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        setupComplete: true,
        uid: this.props.user.uid,
        username: this.props.username,
        profilePicture: this.props.user.profilePicture,
        profile: this.props.user.profile,
      }),
    }).then(() => {
      const userObject = {
        
          setupComplete: true,
          uid: this.props.user.uid,
          username: this.props.user.username,
          profilePicture: this.props.user.profilePicture,
          profile: this.props.user.profile,
        
      }
      this.props.userData(userObject)
      setTimeout(() => this.props.navigation.navigate('AppNavigator'), 3000)
      
    });
  }
  render() {
    console.log(this.props.user)
    return (
      <SafeAreaView style={{height: '100%'}}>
        <View style={{flex: 1}}>
          <Animatable.View
          animation="slideInRight"
            style={{
              alignItems: 'center',
              alignContent: 'center',
              textAlign: 'center',
              padding: 30,
              flex: 0.6,
            }}>
            <Text style={{textAlign: 'center', fontSize: 20}}>
              That's all the setup for now!
            </Text>
            <Text style={{textAlign: 'center', fontSize: 20, marginTop: '5%'}}>
              Inside, you will find heaps of info to help guide your spiritual
              self and others into the physical world.
            </Text>
          </Animatable.View>
          <Animatable.View animation="slideInRight" delay={500} duration={2000} style={{flex: 0.75, alignItems: 'center', marginVertical: '5%'}}>
          <Passport user={this.props.user} />
          </Animatable.View>
          <Animatable.View animation="slideInRight"  style={{flex: 0.75, padding: '10%'}}>
            <Text style={{textAlign: 'center', fontSize: 20, margin: '2%'}}>
              Check back daily for new predictions, reference material, and
              more!
            </Text>
            <Text style={{textAlign: 'center', fontSize: 20, color: 'purple'}}>
              Hint: You can complete your star chart on your profile page for
              further information about your Moon and Ascendant signs.
            </Text>
          </Animatable.View>
          <Animatable.View animation='slideInUp' delay={2000} style={{flex: 0.75, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={this.completeSetup}
              style={{
                margin: '10%',
                backgroundColor: 'blue',
                borderRadius: 40,
                padding: 15,
              }}>
              <Text style={{fontSize: 25, color: 'white'}}>Next</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </SafeAreaView>
    );
  }
}
