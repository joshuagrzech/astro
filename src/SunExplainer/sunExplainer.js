import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import styles from '../stylesheet'




export class SunExplainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: parseInt(this.props.user.profile.birthMonth, 10),
      day: parseInt(this.props.user.profile.birthDay, 10),
      
    };
    this.zodiacView = this.zodiacView.bind(this)
  }
  zodiacView(month, day) {
    var datecode = month * 100 + day;
    if (datecode <= 120) {
      return (
        <Image
          style={styles.constellationImage}
          source={require('../../assets/cap.png')}
        />
      );
    } else if (datecode <= 219) {
      return (
        <Image
          style={styles.constellationImage}
          source={require('../../assets/aqu.png')}
        />
      );
    } else if (datecode <= 320) {
      return (
        <Image
          style={styles.constellationImage}
          source={require('../../assets/pisces.png')}
        />
      );
    } else if (datecode <= 420) {
      return (
        <Image
          style={styles.constellationImage}
          source={require('../../assets/aries.png')}
        />
      );
    } else if (datecode <= 520) {
      return (
        <Image
          style={styles.constellationImage}
          source={require('../../assets/taurus.png')}
        />
      );
    } else if (datecode <= 621) {
      return (
        <Image
          style={styles.constellationImage}
          source={require('../../assets/gem.png')}
        />
      );
    } else if (datecode <= 722) {
      return (
        <Image
          style={styles.constellationImage}
          source={require('../../assets/cancer.png')}
        />
      );
    } else if (datecode <= 822) {
      return (
        <Image
          style={styles.constellationImage}
          source={require('../../assets/leo.png')}
        />
      );
    } else if (datecode <= 921) {
      return (
        <Image
          style={styles.constellationImage}
          source={require('../../assets/virgo.png')}
        />
      );
    } else if (datecode <= 1022) {
      return (
        <Image
          style={styles.constellationImage}
          source={require('../../assets/libra.png')}
        />
      );
    } else if (datecode <= 1121) {
      return (
        <Image
          style={styles.constellationImage}
          source={require('../../assets/scorpio.png')}
        />
      );
    } else if (datecode <= 1221) {
      return (
        <Image
          style={styles.constellationImage}
          source={require('../../assets/sag.png')}
        />
      );
    } else {
      return (
        <Image
          style={styles.constellationImage}
          source={require('../../assets/cap.png')}
        />
      );
    }
  }
  render() {
    return (
      <SafeAreaView style={{ height: '100%'}}>
        
        <View
          style={{
            textAlign: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flex: 1
          }}>
            <View style={{flex: .75}}>
            <Card style={styles.infoCard}>
          <Text style={{textAlign: 'center', fontSize: 18}}>
          This means that on {this.props.user.profile.birthMonth}/
            {this.props.user.profile.birthDay}, the sun was over the{' '}
            {this.props.user.profile.sunSign} constellation.
          </Text>
          </Card>
          </View>
          <View style={{flex: 1.8}}>
          <Card style={styles.infoCard}>
          <Text style={{textAlign: 'center', marginTop: '5%', marginHorizontal: '5%', fontSize: 22, fontWeight: 'bold'}}>
            
          </Text>
          
          {this.zodiacView(this.state.month, this.state.day)}
          </Card>
          </View>
          <View style={{flex: .5}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('PersonalSun')} style={styles.blueButton}>
          <Text style={styles.whiteButtonText}>Next</Text>
        </TouchableOpacity> 
        </View>
        </View>
      </SafeAreaView>
    );
  }
}
