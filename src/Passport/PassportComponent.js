import React from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {NavigationContainer} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import PhotoUpload from 'react-native-photo-upload';
import storage from '@react-native-firebase/storage';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faQuestion} from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import styles from '../stylesheet'
import { ProfilePictureUpload } from '../ProfilePictureUpload/ProfilePictureUploadComponent';

const zodiacIcons =  {
  Aries: ['Eager', 'Dynamic', 'Quick', 'Competitive'],
  Taurus: ['Strong', 'Dependable', 'Sensual', 'Creative'],
  Gemini: ['Versatile', 'Expressive', 'Curious', 'Kind'],
  Cancer: ['Intuitive', 'Sentimental', 'Compassionate', 'Protective'],
  Leo: ['Dramatic', 'Outgoing', 'Fiery', 'Self-Assured'],
  Virgo: ['Practical', 'Loyal', 'Gentle', 'Analytical'],
  Libra: ['Social', 'Fair-Minded', 'Diplomatic', 'Gracious'],
  Scorpio: ['Passionate', 'Stubborn', 'Resourceful', 'Brave'],
  Saggitarius: ['Extroverted', 'Optimistic', 'Funny', 'Generous'],
  Capricorn: ['Serious', 'Independent', 'Disciplined', 'Tenacious'],
  Aquarius: ['Deep', 'Imaginative', 'Original', 'Uncompromising'],
  Pisces: require('../assets/044-pisces.png'),
};

export class Passport extends React.Component {
  constructor(props) {
    super(props);
  }

  birthdayInfo() {
    if (this.props.user.profile === undefined) {
      return (
        <Text style={styles.whiteButtonText}> ??/?? </Text>
      ) } else {
        return(
        <Text style={styles.whiteButtonText}> {`${this.props.user.profile.birthMonth}/${this.props.user.profile.birthDay}`} </Text>
        )
      }
    }


    zodiacIcon() {
      return zodiacIcons.pisces
      
    }
  
  render() {
    return (
      <View style={{ display: 'flex'}}>
        
        <Card style={{marginLeft: '30%', backgroundColor: 'blue', marginBottom: '-4%', width: '70%', height: '25%'}}>
            {this.birthdayInfo()}
        </Card>
        
        <Card style={{ height: '50%'}}>
          <View style={{display: 'flex', flexDirection: "row-reverse"}}>
          <Card style={{padding: '2%',  margin: '2%', width: '20%'}}>
          <Image source={zodiacIcons[this.props.user.profile.ascendingSign]} style={{height: '100%', width: '100%'}}/>
          </Card>
          <Card style={{padding: '2%', margin: '2%', width: '20%'}}>
          <Image source={zodiacIcons[this.props.user.profile.moonSign]} style={{height: '100%', width: '100%'}}/>
          </Card>
          <Card style={{padding: '2%', margin: '2%', width: '20%'}}>
          <Image source={zodiacIcons[this.props.user.profile.sunSign]} style={{height: '100%', width: '100%'}}/>
          </Card>
          
          </View>
        </Card>
        <Card
          style={{
            height: '45%',
            width: '20%',
            borderRadius: 100,
            alignItems: 'center',
            backgroundColor: 'black',
            marginLeft: '5%',
            marginTop: '-24%',
            
          }}>
          <PhotoUpload
      onPhotoSelect={async (avatar) => {
        const reference = storage().ref(this.props.user.uid)
        if (avatar) {
          const pathToFile = avatar;
          // uploads file
          await reference.putString(avatar, 'base64').then( async function(snapshot) {
            const url = await storage()
            .ref(this.props.user.uid)
            .getDownloadURL();
            this.props.setProfilePicture(url)
            
          });
        };
      }}>
      <Image
        style={{
          width: 80,
          height: 80,
          borderRadius: 100,
          borderWidth: 5
        }}
        resizeMode="cover"
        source={{uri: this.props.user.profilePicture}}
      />
    </PhotoUpload>
        </Card>
        
      </View>
    );
  }
}
