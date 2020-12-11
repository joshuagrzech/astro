import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Easing,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import PhotoUpload from 'react-native-photo-upload';
import storage from '@react-native-firebase/storage';
import styles from '../stylesheet';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import MoonIcon from '../animations/moonIcon';
import SunIcon from '../animations/sunIcon';
import AscendingIcon from '../animations/ascendingIcon';
import LottieAnimation from 'easy-lottie-react-native';

const selectImage = require('../assets/selectimage-01.png');

const zodiacIcons = {
  Aries: ['Eager', 'Dynamic', 'Quick', 'Competitive'],
  Taurus: ['Strong', 'Dependable', 'Sensual', 'Creative'],
  Gemini: ['Versatile', 'Expressive', 'Curious', 'Kind'],
  Cancer: ['Intuitive', 'Sentimental', 'Compassionate', 'Protective'],
  Leo: ['Dramatic', 'Outgoing', 'Fiery', 'Self-Assured'],
  Virgo: ['Practical', 'Loyal', 'Gentle', 'Analytical'],
  Libra: require('../assets/047-libra.png'),
  Scorpio: ['Passionate', 'Stubborn', 'Resourceful', 'Brave'],
  Saggitarius: ['Extroverted', 'Optimistic', 'Funny', 'Generous'],
  Capricorn: ['Serious', 'Independent', 'Disciplined', 'Tenacious'],
  Aquarius: ['Deep', 'Imaginative', 'Original', 'Uncompromising'],
  Pisces: require('../assets/044-pisces.png'),
  undefined: require('../assets/015-hourglass.png'),
  null: require('../assets/015-hourglass.png'),
};

export class Passport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  profilePicture(props) {
    return {uri: `data:image/png;base64,${this.props.user.profilePicture}`};
  }

  birthdayInfo() {
    return (
      <Text style={styles.blackButtonText}>
        {' '}
        {this.props.user.profile.birthMonth}/{this.props.user.profile.birthDay}{' '}
      </Text>
    );
  }

  username() {
    return (
      <Text style={styles.blackButtonText}>{this.props.user.username}</Text>
    );
  }

  render() {
    return (
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          marginTop: '-15%',

          alignContent: 'center',
          
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            marginBottom: '-32%',
            padding: '2%',

            alignContent: 'center',
          }}></View>
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '43%',
            alignItems: 'center',
            alignContent: 'center',
            marginHorizontal: '4%',
            marginVertical: '6%',
          }}
          animation="bounceIn"
          delay={1000}>
          <TouchableOpacity
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 100,
              alignItems: 'center',
              alignContent: 'center',
              shadowOffset: {width: 2, height: 4},
              shadowOpacity: 0.9,
              shadowRadius: 5,
              elevation: 1,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                alignContent: 'center',
                alignItems: 'center',
                borderRadius: 100,

                borderWidth: 2,
                borderColor: 'white',
              }}
              resizeMode="cover"
              source={this.profilePicture()}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: '5%',
            alignItems: 'center',
            alignContent: 'center',
          }}
          animation="slideInDown"
          delay={1500}>
          <Card
            style={{
              flex: 1,
              padding: '1%',
              height: '100%',

              textAlign: 'center',
              width: '50%',
              alignItems: 'center',
              marginTop: '-5%',
            }}>
            {this.username()}
          </Card>
        </View>
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row-reverse',
            width: '80%',
            height: '100%',
            marginTop: '20%',
            padding: '5%',
            marginBottom: '-40%',
          }}>
          <View
            animation="bounceIn"
            delay={1500}
            style={{
              flex: 3,

              height: '100%',
              flexDirection: 'row',
              marginVertical: '6%',
            }}>
            <Card
              style={{
                flex: 3,
                alignItems: 'center',
                alignContent: 'center',
                height: '50%',
                padding: '-50%',
                flexDirection: 'row',
                marginVertical: '6%',
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  width: '100%',
                  borderWidth: 4,
                  borderColor: 'white',
                  backgroundColor: 'orange',
                  borderRadius: 100,
                  alignContent: 'center',
                  alignItems: 'center',
                  shadowOffset: {width: 1, height: 3},
                  shadowOpacity: 0.8,
                  shadowRadius: 3,
                  elevation: 3,
                  padding: '1%',
                  marginVertical: '2%',
                  marginHorizontal: '1%',
                }}>
                <SunIcon />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  width: '100%',
                  borderWidth: 4,
                  borderColor: 'white',
                  backgroundColor: 'grey',
                  borderRadius: 100,
                  alignContent: 'center',
                  alignItems: 'center',
                  shadowOffset: {width: 1, height: 3},
                  shadowOpacity: 0.8,
                  shadowRadius: 3,
                  elevation: 3,
                  padding: '1%',
                  marginVertical: '2%',
                  marginHorizontal: '1%',
                }}>
                <MoonIcon />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  width: '100%',
                  borderWidth: 4,
                  borderColor: 'white',
                  backgroundColor: 'black',
                  borderRadius: 100,
                  alignContent: 'center',
                  alignItems: 'center',
                  shadowOffset: {width: 1, height: 3},
                  shadowOpacity: 0.8,
                  shadowRadius: 3,
                  elevation: 3,

                  marginVertical: '2%',
                  marginHorizontal: '1%',
                }}>
                <AscendingIcon />
              </TouchableOpacity>
            </Card>
          </View>
        </View>
      </View>
    );
  }
}
