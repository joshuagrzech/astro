import React, {useState} from 'react';
import {Image, View, TouchableOpacity,
  Platform, StyleSheet} from 'react-native';
import {utils} from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker'
import ImageResizer from 'react-native-image-resizer'
import RNFS from 'react-native-fs'
import PropTypes from 'prop-types'


export function ProfilePictureUpload(props) {
  
  function imageDisplay() {
    if (props.user.profilePicture === undefined) {
      return require('../assets/selectimage-01.png')
    } else {
      return {uri: `data:image/png;base64,${props.user.profilePicture}`}
    }
  }
  function openImagePicker() {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
      includeBase64: true
    }).then(async (res) => {
      if (res.data) {
        const newPic = res.data
          props.setProfilePicture(newPic)
      };
    });
  }
  

  return (
    <TouchableOpacity
      onPress={openImagePicker}>
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          borderWidth: 5
        }}
        resizeMode="cover"
        source={imageDisplay()}
      />
    </TouchableOpacity>
  );
}

