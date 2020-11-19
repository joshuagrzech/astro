import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
library.add(fab);


export const FBLoginButton = (props) => {


  function onSignIn(user) {
    fetch('https://us-central1-astro-ee1e9.cloudfunctions.net/checkForUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid: user.user.uid,
      }),
    }).then((response) =>
      response.json().then((json) => {
        if (json.user) {
          props.userData(json.user);
          props.onSignIn(json.setupComplete);
        } else {
          props.userData({
            uid: user.user.uid,
            firstName: user.additionalUserInfo.profile.given_name,
            lastName: user.additionalUserInfo.profile.family_name,
            email: user.additionalUserInfo.profile.email
          });
          props.onSignIn(json.setupComplete);
        }
      }),
    );
  }

  return (
    <SafeAreaView>
      
      <TouchableOpacity
        style={{padding: 20, display: 'flex'}}
        onPress={() => onGoogleButtonPress().then((user) => onSignIn(user))}>
        <FontAwesomeIcon
          style={{margin: 10}}
          size={32}
          icon={['fab', 'google']}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
