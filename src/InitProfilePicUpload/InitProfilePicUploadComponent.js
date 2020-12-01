import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import ProfilePictureUpload from '../ProfilePictureUpload/ProfilePictureUploadContainer';
import styles from '../stylesheet';
const selectImage = require('../assets/selectimage-01.png');

export function InitProfilePic(props) {
  const [picUploaded, setPicUplaoded] = React.useState(false);

  function picUploadedNext() {
    if (props.user.profilePicture === null) {
      return;
    } else {
      return (
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Username')}
          style={styles.blueButton}>
          <Text style={styles.whiteButtonText}>Next</Text>
        </TouchableOpacity>
      );
    }
  }
  return (
    <SafeAreaView
      style={{
        height: '100%',
        position: 'relative',
        flex: 1,
      }}>
      <View style={styles.topView}>
        <View style={{flex: 0.5, marginTop: '10%'}}>
          <Text style={styles.questionText}>First, a profile picture!</Text>
          <Text style={styles.questionText}>
            This will only be seen by who you choose.
          </Text>
        </View>
        <View style={{flex: 1.75}}>
          <ProfilePictureUpload selectImage={selectImage} />
        </View>

        <View style={{flex: 0.75}}>
        {picUploadedNext()}
        </View>
      </View>
    </SafeAreaView>
  );
}
