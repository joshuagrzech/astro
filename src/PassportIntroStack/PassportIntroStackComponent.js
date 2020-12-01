import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PassportIntro from '../PassportIntro/PassportIntroContainer'
import InitProfilePic from '../InitProfilePicUpload/InitProfilePicUploadContainer'
import InitUsername from '../InitUsernameSet/InitUsernameSetContainer';

const Stack = createStackNavigator();

export default function PassportStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PassportIntro" component={PassportIntro} />
      <Stack.Screen name="ProfilePicture" component={InitProfilePic} />
      <Stack.Screen name="Username" component={InitUsername} />
      
    </Stack.Navigator>
  );
}