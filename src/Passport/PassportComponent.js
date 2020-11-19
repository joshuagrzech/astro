import React from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {NavigationContainer} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faQuestion} from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import styles from '../stylesheet'

export class Passport extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{margin: '15%', display: 'flex'}}>
        <Card style={{marginLeft: '30%', backgroundColor: 'blue', marginBottom: '-2%', width: '70%', height: '25%'}}>
            <Text style={styles.whiteButtonText}> ??/??/???? </Text>
        </Card>
        <Card style={{padding: '5%', marginBottom: '-42%'}}>
          <View style={{display: 'flex', flexDirection: "row-reverse"}}>
          <Card style={{padding: '2%',  margin: '2%', width: '20%'}}>
            <FontAwesomeIcon
              icon={faQuestion}
              
              size={50}
            />
          </Card>
          <Card style={{padding: '2%', margin: '2%', width: '20%'}}>
            <FontAwesomeIcon
              icon={faQuestion}
              
              size={50}
            />
          </Card>
          <Card style={{padding: '2%', margin: '2%', width: '20%'}}>
            <FontAwesomeIcon
              icon={faQuestion}
              
              size={50}
            />
          </Card>
          <FontAwesomeIcon
              icon={faChevronDown}
              style={{marginTop: '5%', marginRight: '7%'}}
              size={60}
              color={'gray'}
            />
          </View>
        </Card>
        <Card
          style={{
            height: '55%',
            width: '25%',
            borderRadius: 100,
            alignItems: 'center',
            backgroundColor: 'black',
            marginLeft: '3%'
          }}>
          <Image
            style={{
              height: '90%',
              width: '85%',
              borderRadius: 100,
              marginTop: '5%',
            }}
            source={{uri: this.props.user.profilePicture}}
          />
        </Card>
        
      </View>
    );
  }
}
