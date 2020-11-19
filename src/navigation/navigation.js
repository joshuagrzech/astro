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
import ZodiacStack from '../zodiacStack';
import Profile from '../Profile/ProfileContainer';
const Tab = createBottomTabNavigator();
import {LogBox} from 'react-native';

export class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.signInGate = this.signInGate.bind(this);

    this.state = {
      loaded: false
    };
    this.setNullBirthdate = this.setNullBirthdate.bind(this);
  }

  componentWillMount() {
    this.props.userData(this.props.user)
    this.props.setSetupComplete(this.props.user.setupComplete)
  }
  componentDidMount() {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    console.log("NavProfile" + this.props.user)
    
  }
  setNullBirthdate() {
    this.props.setBirthdate(null);
  }

  signInGate() {
    if (this.props.setupComplete === false) {
      
      return <ZodiacStack />;
    } else {
      return (
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
      );
    }
  }

  render() {
    return <View style={{height: '100%'}}>{this.signInGate()}</View>;
  }
}
