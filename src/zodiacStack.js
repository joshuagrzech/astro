import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PassportToProfilePic from './AppIntro/ProfileSetupContainer'
import InitProfilePicUploadContainer from './InitProfilePicUpload/InitProfilePicUploadContainer';
import { InitProfilePic } from './InitProfilePicUpload/InitProfilePicUploadComponent';


const Stack = createStackNavigator()

export default function ZodiacStack() {

  
  return (
    <NavigationContainer>
      
    <Stack.Navigator screenOptions={{headerShown: false}}>
   
      <Stack.Screen name="Intro" component={PassportToProfilePic} />
      <Stack.Screen name="ProfilePic" options={{
        animationEnabled: false,
      }} component={InitProfilePic}/>
      
      
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}

