import React, {useState} from 'react';
import {Image} from 'react-native';
import PhotoUpload from 'react-native-photo-upload';
import {utils} from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

export function ProfilePictureUpload(props) {
  const reference = storage().ref(props.user.uid);

  return (
    <PhotoUpload
      onPhotoSelect={async (avatar) => {
        if (avatar) {
          const pathToFile = avatar;
          // uploads file
          await reference.putString(avatar, 'base64').then( async function(snapshot) {
            const url = await storage()
            .ref(props.user.uid)
            .getDownloadURL();
            props.setProfilePicture(url)
            
          });
        };
      }}>
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          borderWidth: 5
        }}
        resizeMode="cover"
        source={props.selectImage}
      />
    </PhotoUpload>
  );
}
