import React from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {NavigationContainer} from '@react-navigation/native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import styles from '../stylesheet';
import {faRubleSign} from '@fortawesome/free-solid-svg-icons';
import Passport from '../Passport/PassportContainer';

export class PassportIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  render() {
    return (
      <SafeAreaView
        style={{
          height: '100%',
          position: 'relative',
          flex: 1,
        }}>
        <View style={styles.topView}>
          <View style={{flex: 0.5, marginTop: '5%'}}>
            <Text style={styles.questionText}>Hey there!</Text>
            <Text style={styles.questionText}>Let's finish your profile.</Text>
          </View>
          <View style={{flex: 1.75, marginTop: '15%', marginBottom: '-10%'}}>
            <Passport user={{profile: {birthMonth: '??', birthDay: '??', profilePicture: null, sunSign: 'null'}}} />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.questionText}>This will be your home in Astro.</Text>
            <Text style={styles.questionText}>It will fill as you journey through the set-up.</Text>
            
          </View>

          <View style={{flex: 0.75}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ProfilePicture')}
              style={styles.blueButton}>
              <Text style={styles.whiteButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
