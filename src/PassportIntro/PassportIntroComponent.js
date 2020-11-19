import React from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {NavigationContainer} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import styles from '../stylesheet';
import {faRubleSign} from '@fortawesome/free-solid-svg-icons';
import Passport from '../Passport/PassportContainer';

export class PassportIntro extends React.Component {
  constructor(props) {
    super(props);
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
            <Text style={styles.questionText}>
              Hey there, {this.props.user.name}!
            </Text>
            <Text style={styles.questionText}>This is your passport.</Text>
            <Passport />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.boldWhiteText}>
              This is home to all things YOU!
            </Text>
            <Text style={{fontSize: 20, margin: 10, textAlign: 'center'}}>
              As you journey through Astro this will fill with insights
              specific to your life.
            </Text>
            
           
          </View>
          <View style={{flex: 2, alignItems: 'center'}}></View>
          <View style={{flex: 0.75}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Init')}
              style={styles.blueButton}>
              <Text style={styles.whiteButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
