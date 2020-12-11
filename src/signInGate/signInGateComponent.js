import React, {useState} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import AppNavigator from '../navigation/NavigationContainer';
import ZodiacStack from '../zodiacStack';
import {pure} from 'recompose';
import CheckForUser from './checkForUserContainer';
var Spinner = require('react-native-spinkit');
const astroLogo = require('../../assets/astrologoicon.png');

const SignInGate = React.memo(
  props => {
  console.log('directing to sign-in')
  if (props.user.setupComplete === false) {
    return <ZodiacStack />;
  } else if (props.user.setupComplete === true) {
    return <CheckForUser uid={props.user.uid} />;
  }
}, (prevProps, nextProps) => prevProps.stateUser === nextProps.stateUser)

export default SignInGate