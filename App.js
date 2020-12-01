import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  ViewPagerAndroidComponent,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/NavigationContainer';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import {Provider} from 'react-redux';
import {store} from './store';
import {persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
var Spinner = require('react-native-spinkit');
import {Formik, Form, Field, ErrorMessage} from 'formik';
import PhoneInput from 'react-native-phone-number-input';
import styles from './src/stylesheet';
const astroLogo = require('./assets/astrologoicon.png');

GoogleSignin.configure({
  webClientId:
    '588113870416-b5u0gtj5iffdbnanhhqtvofvj0191v46.apps.googleusercontent.com',
});

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: false,
  sync: {},
});

export default function App() {
  const [newUser, setNewUser] = useState({complete: false});
  const [startLoad, setStartLoad] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('+1');
  const [code, setCode] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(false);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    if (user === null) {
      return;
    } else {
      setUser(user);
      setStartLoad(true);
      console.log(user);
      fetch('https://us-central1-astro-ee1e9.cloudfunctions.net/checkForUser', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uid: user.uid,
        }),
      }).then((response) =>
        response.json().then((json) => {
          console.log(json);
          if (json.user !== undefined) {
            console.log('I Exist' + json.user);
            setNewUser(json.user);
          } else if (json.setupComplete === false) {
            setNewUser({
              uid: user.uid,
              setupComplete: false
            });
          }
        }),
      );
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (startLoad === true) {
    setTimeout(() => {
      setStartLoad(false);
    }, 5000);
    return (
      <SafeAreaView
      behavior="padding"
      style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        
          <Image
            style={{height: undefined, width: '100%', marginTop: '15%', flex: 1}}
            source={astroLogo}
          />
        
        <View style={{flex: 1}}><Spinner isVisible={true} color={'white'} size={50} type={'Pulse'}/></View>
      </View>
    </SafeAreaView>
    );
  }

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  const confirmNumber = () => {
    if (!confirm) {
      return (
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flex: 1,
          }}>
          <View style={{flex: 0.75}}>
            <TextInput
              value={phoneNumber}
              keyboardType={'phone-pad'}
              returnKeyType={'done'}
              style={{
                backgroundColor: 'white',
                width: 200,
                height: 50,
                borderRadius: 50,
                padding: '3%',
                alignContent: 'center',
                textAlign: 'center',
                margin: '10%',
              }}
              onChangeText={(text) => setPhoneNumber(text)}
            />
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => signInWithPhoneNumber(phoneNumber)}
              style={styles.blueButton}>
              <Text style={styles.whiteButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flex: 1,
          }}>
          <View style={{flex: 0.75}}>
            <TextInput
              value={code}
              keyboardType={'phone-pad'}
              style={{
                backgroundColor: 'white',
                width: 200,
                height: 50,
                borderRadius: 50,
                padding: '3%',
                alignContent: 'center',
                textAlign: 'center',
                margin: '10%',
              }}
              onChangeText={(text) => setCode(text)}
            />
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => confirmCode(code)}
              style={styles.blueButton}>
              <Text style={styles.whiteButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  if (newUser.complete === false) {
    
    return (
      <Provider store={store} style={{backgroundColor: 'blue'}}>
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
                style={{height: undefined, width: '100%', marginTop: '10%', flex: 1}}
                source={astroLogo}
              />
            
            <View style={{flex: 1}}>{confirmNumber()}</View>
          </View>
        </KeyboardAvoidingView>
      </Provider>
    );
  } else if (
    newUser.setupComplete === false ||
    newUser.setupComplete === true
  ) {
    console.log(newUser)
    return (
      <Provider store={store} style={{backgroundColor: 'blue'}}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <NavigationContainer style={{height: '100%'}}>
              <AppNavigator user={newUser} style={{height: '100%'}} />
            </NavigationContainer>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}
