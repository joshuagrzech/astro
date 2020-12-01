import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import UsernameSet from '../UsernameSet/UsernameSetContainer';
import styles from '../stylesheet';

 

export function InitUsername(props) {
    const [randomName, setRandomName] = React.useState(null)

    function usernameSetNext() {
        if (props.user.username === undefined) {
          return;
        } else {
            console.log(props.user.username)
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Init')}
              style={styles.blueButton}>
              <Text style={styles.whiteButtonText}>Next</Text>
            </TouchableOpacity>
          );
        }
      }

  return (
    <SafeAreaView
      style={{alignContent: 'center', alignItems: 'center'}}>
      <View style={{marginTop: '10%'}}>
          <Text style={styles.questionText}>Tiiiiiight. Lookin' good!</Text>
        <View
          style={{
            marginTop: '20%',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.questionText}>Now a username.</Text>
          <View style={{marginTop: '10%'}}>
            <UsernameSet randomName={randomName}/>
          </View>
          <View style={{marginTop: '5%'}}>
              <Text style={styles.questionText}>  </Text>
              <View >
              
              </View>
              <View>
                  {usernameSetNext()}
              </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
