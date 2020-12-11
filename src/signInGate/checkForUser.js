import React, {useState} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import ZodiacStack from '../zodiacStack';
import AppNavigator from '../navigation/NavigationContainer';

var Spinner = require('react-native-spinkit');
const astroLogo = require('../../assets/astrologoicon.png');

function CheckForUser(props) {
  const [currentUser, setCurrentUser] = useState(null);
  if (!currentUser) {
    fetch('https://us-central1-astro-ee1e9.cloudfunctions.net/checkForUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid: props.uid,
      }),
    }).then((response) =>
      response.json().then((json) => {
        console.log('user loaded');
        console.log(json);
        props.userData(json);
        setCurrentUser(json);
      }),
    );
    return (
      <SafeAreaView
        behavior="padding"
        style={{flex: 1, backgroundColor: 'black'}}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: undefined,
              width: '100%',
              marginTop: '15%',
              flex: 1,
            }}
            source={astroLogo}
          />

          <View style={{flex: 1}}>
            <Spinner
              isVisible={true}
              color={'white'}
              size={50}
              type={'Pulse'}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  } else if (currentUser.setupComplete === true) {
    return <AppNavigator />;
  } else if (currentUser.setupComplete === false) {
    return <ZodiacStack />
  }
}

export default CheckForUser;
