import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
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
    console.log('FINAL PROFILE' + `${this.props.user.uid}`)
    fetch('https://us-central1-astro-ee1e9.cloudfunctions.net/saveNewUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid: this.props.user.uid,
        name: this.props.user.name,
        email: this.props.user.email,
        astroProfile: this.props.profile,
      }),
    }).then(() => {
      console.log({
        uid: this.props.user.uid,
        name: this.props.user.name,
        email: this.props.user.email,
        astroProfile: this.props.profile,
      })
      this.props.userData({
        uid: this.props.user.uid,
        name: this.props.user.name,
        email: this.props.user.email,
        astroProfile: this.props.profile,
      });
      this.props.markSetupComplete(true);
    });
  }
  render() {
    return (
      <SafeAreaView style={{height: '100%'}}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <View style={{flex: 1}}>
          <View
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
          </View>
          <View style={{flex: 0.75, alignItems: 'center'}}>
            <Image
              style={{height: '100%', width: '40%'}}
              source={require('../../assets/010-constellations.png')}
            />
          </View>
          <View style={{flex: 0.75, padding: '10%'}}>
            <Text style={{textAlign: 'center', fontSize: 20, margin: '2%'}}>
              Check back daily for new predictions, reference material, and
              more!
            </Text>
            <Text style={{textAlign: 'center', fontSize: 20, color: 'purple'}}>
              Hint: You can complete your star chart on your profile page for
              further information about your Moon and Ascendant signs.
            </Text>
          </View>
          <View style={{flex: 0.75, alignItems: 'center'}}>
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
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
