import React from 'react'
import {View, Image, KeyboardAvoidingView} from 'react-native';
var Spinner = require('react-native-spinkit');
const astroLogo = require('../../assets/astrologoicon.png');


export default class Loading extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1, backgroundColor: 'black'}}>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: undefined,
                width: '100%',
                marginTop: '15%',
                flex: 1,
              }}
              source={astroLogo}
            />
  
            <View style={{flex: 1}}>
              <Spinner
                isVisible={true}
                color={'white'}
                size={50}
                type={'Pulse'}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      );
    }
  }