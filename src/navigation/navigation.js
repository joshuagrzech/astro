import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen/HomeScreenContainer';
import {DetailsScreen} from '../Details/DetailsComponent';
import {Text, View, TextInput, Image, SafeAreaView} from 'react-native';
import AppIntro from '../AppIntro/AppIntroContainer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  faMeteor,
  faSlidersH,
  faStar,
  faStarAndCrescent,
  faEye,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import Profile from '../Profile/ProfileContainer';
const Tab = createBottomTabNavigator();
import {LogBox} from 'react-native';
import Passport from '../Passport/PassportContainer';

export class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loaded: false,
      user: this.props.user,
    };
    this.setNullBirthdate = this.setNullBirthdate.bind(this);
  }

  componentDidMount() {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    console.log('NavProfile' + this.props.user);
  }
  setNullBirthdate() {
    this.props.setBirthdate(null);
  }

  render() {
    console.log('existing user signed in')
    return (
      <View style={{height: '100%'}}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? faMeteor : faMeteor;
              } else if (route.name === 'Settings') {
                iconName = focused ? faSlidersH : faSlidersH;
              } else if (route.name === 'Your Stars') {
                iconName = focused ? faStar : faStar;
              } else if (route.name === 'Their Stars') {
                iconName = focused ? faStarAndCrescent : faStarAndCrescent;
              } else if (route.name === 'Learn') {
                iconName = focused ? faEye : faEye;
              } else if (route.name === 'Profile') {
                iconName = focused ? faUserAlt : faUserAlt;
              }

              // You can return any component that you like here!
              return (
                <FontAwesomeIcon icon={iconName} size={size} color={color} />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Your Stars" component={DetailsScreen} />
          <Tab.Screen name="Their Stars" component={DetailsScreen} />
          <Tab.Screen name="Learn" component={DetailsScreen} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </View>
    );
  }
}
