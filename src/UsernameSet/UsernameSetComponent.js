import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
import styles from '../stylesheet'

export function UsernameSet(props) {
  const [username, setUsername] = React.useState('');
  return (
    <View>
      <TextInput
        value={username}
        style={{
          borderWidth: 5,
          backgroundColor: 'white',
          width: 200,
          height: 50,
          borderRadius: 50,
          padding: '3%',
          alignContent: 'center',
          textAlign: 'center',
        }}
        onChangeText={(text) => {
          setUsername(text);
          props.setUsername(text);
        }}
      />
      <TouchableOpacity
        style={{
          padding: '5%',
          alignContent: 'center',
          alignItems: 'center',
          borderWidth: 5,
          borderColor: 'blue',
          borderRadius: 50,
          marginTop: '10%'
        }}
        onPress={() => {
          fetch('http://names.drycodes.com/10?nameOptions=funnyWords')
            .then((res) => res.json())
            .then((result) => {
              setUsername(result[0])
              props.setUsername(result[0]);
            });
        }}>
        <Text style={styles.blackButtonText}>Random Username</Text>
      </TouchableOpacity>
    </View>
  );
}
