import React from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {NavigationContainer} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import styles from '../stylesheet';
import {faRubleSign} from '@fortawesome/free-solid-svg-icons';

export class InitStarSign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: null,
      month: '',
      day: '',
    };
    this.setDate = this.setDate.bind(this);
    this.setBirthday = this.setBirthday.bind(this);
    this.setBirthdayNull = this.setBirthdayNull.bind(this);
  }

  setBirthday() {
    this.props.profileBirth([this.state.month, this.state.day]);
    this.props.navigation.navigate('Sun');
    console.log(this.props.user)
  }
  setBirthdayNull() {
    this.props.setBirthdate(null);
  }

  setDate(date) {
    var stringDate = date.toISOString();
    var year = stringDate.split('-')[0];
    var month = stringDate.split('-')[1];
    var initDay = stringDate.split('-')[2];

    var day = initDay.slice(0, 2);
    this.setState({
      month: month,
      day: day,
    });
    console.log(this.state);
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
          <View style={{flex: 3}}>
            <Card style={styles.interactCard}>
              <Text style={styles.questionText}>When were you born?</Text>
              <DatePicker
                date={this.state.birthdate}
                mode="date"
                onDateChange={this.setDate}
              />
            </Card>
          </View>
          <View style={{flex: 0.25}}>
            <Text style={styles.boldWhiteText}>
              This will tell us your sun-sign.
            </Text>
          </View>
          <View style={{flex: 2, alignItems: 'center'}}>
            <Image
              style={styles.sunImage}
              source={require('../../assets/032-sun.png')}
            />
          </View>
          <View style={{flex: 0.75}}>
            <TouchableOpacity
              onPress={this.setBirthday}
              style={styles.blueButton}>
              <Text style={styles.whiteButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
