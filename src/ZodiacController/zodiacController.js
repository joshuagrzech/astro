import React from 'react';
import {View, Text, SafeAreaView, Button, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Card} from 'react-native-shadow-cards';
import styles from '../stylesheet';


export default class ZodiacController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: parseInt(this.props.profile.birthMonth, 10),
      day: parseInt(this.props.profile.birthDay, 10),
    };
    this.setBirthdateNull = this.setBirthdateNull.bind(this);
    this.getZodiac = this.getZodiac.bind(this);
    this.sendStarSign = this.sendStarSign.bind(this);
  }

  getZodiac(month, day) {
    console.log(typeof day);
    var datecode = month * 100 + day;
    console.log(datecode);
    if (datecode <= 120) {
      return 'Capricorn';
    } else if (datecode <= 219) {
      return 'Aquarius';
    } else if (datecode <= 320) {
      return 'Pisces';
    } else if (datecode <= 420) {
      return 'Aries';
    } else if (datecode <= 520) {
      return 'Taurus';
    } else if (datecode <= 621) {
      return 'Gemini';
    } else if (datecode <= 722) {
      return 'Cancer';
    } else if (datecode <= 822) {
      return 'Leo';
    } else if (datecode <= 921) {
      return 'Virgo';
    } else if (datecode <= 1022) {
      return 'Libra';
    } else if (datecode <= 1121) {
      return 'Scorpio';
    } else if (datecode <= 1221) {
      return 'Sagittarius';
    } else {
      return 'Capricorn';
    }
  }

  zodiacView(month, day) {
    var datecode = month * 100 + day;
    if (datecode <= 120) {
      return (
        <Image
          style={styles.zodiacImage}
          source={require('../../assets/009-capricorn.png')}
        />
      );
    } else if (datecode <= 219) {
      return (
        <Image
          style={styles.zodiacImage}
          source={require('../../assets/002-aquarium.png')}
        />
      );
    } else if (datecode <= 320) {
      return (
        <Image
          style={styles.zodiacImage}
          source={require('../../assets/021-pisces.png')}
        />
      );
    } else if (datecode <= 420) {
      return (
        <Image
          style={styles.zodiacImage}
          source={require('../../assets/003-aries.png')}
        />
      );
    } else if (datecode <= 520) {
      return (
        <Image
          style={styles.zodiacImage}
          source={require('../../assets/034-taurus.png')}
        />
      );
    } else if (datecode <= 621) {
      return (
        <Image
          style={styles.zodiacImage}
          source={require('../../assets/014-gemini.png')}
        />
      );
    } else if (datecode <= 722) {
      return (
        <Image
          style={styles.zodiacImage}
          source={require('../../assets/008-cancer.png')}
        />
      );
    } else if (datecode <= 822) {
      return (
        <Image
          style={styles.zodiacImage}
          source={require('../../assets/016-leo.png')}
        />
      );
    } else if (datecode <= 921) {
      return (
        <Image
          style={styles.zodiacImage}
          source={require('../../assets/035-virgo.png')}
        />
      );
    } else if (datecode <= 1022) {
      return (
        <Image
          style={styles.zodiacImage}
          source={require('../../assets/017-libra.png')}
        />
      );
    } else if (datecode <= 1121) {
      return (
        <Image
          style={styles.zodiacImage}
          source={require('../../assets/026-scorpio.png')}
        />
      );
    } else if (datecode <= 1221) {
      return (
        <Image
          style={styles.zodiacImage}
          source={require('../../assets/024-sagittarius.png')}
        />
      );
    } else {
      return (
        <Image
          style={styles.zodiacImage}
          source={require('../../assets/009-capricorn.png')}
        />
      );
    }
  }

  setBirthdateNull() {
    this.props.profileBirth([undefined, undefined]);
  }

  sendStarSign() {
    const sign = this.getZodiac(this.state.month, this.state.day);
    this.props.setSunSign(sign);
    this.props.navigation.navigate('SunExplainer');
  }

  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            alignItems: 'center',
            height: '100%',
            width: '100%',
           
            
          }}>
          <View style={{flex: 4, justifyContent: 'center', alignItems: 'center', marginTop: '6%'}}>
            <Text style={styles.boldText}>Your sun-sign is:</Text>
            <Card style={styles.infoCard}>
              <Text style={styles.boldBlueText}>
                {this.getZodiac(this.state.month, this.state.day)}
              </Text>
              {this.zodiacView(this.state.month, this.state.day)}
            </Card>
          </View>
          <View style={{flex: .6}}>
            <TouchableOpacity
              onPress={this.sendStarSign}
              style={styles.blueButton}>
              <Text style={styles.whiteButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
