import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InitStarSign from './InitialStarSign/initialStarSignContainer'
import ZodiacController from './ZodiacController/zodiacControllerContainer';
import SunExplainer from './SunExplainer/sunExplainerContainer'
import PersonalSun from './PersonalSun/personalSunContainer'
import IntroFinal from './IntroFinal/introFinalContainer'
import PassportIntro from './PassportIntro/PassportIntroContainer'


const Stack = createStackNavigator();

function ZodiacStack() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="PassIntro" component={PassportIntro} />
          <Stack.Screen name="Init" component={InitStarSign} />
          <Stack.Screen name="Sun" component={ZodiacController} />
          <Stack.Screen name="SunExplainer" component={SunExplainer} />
          <Stack.Screen name="PersonalSun" component={PersonalSun} />
          <Stack.Screen name="IntroFinal" component={IntroFinal} />
        </Stack.Navigator> 
      </NavigationContainer>
    )
  }
export default ZodiacStack;