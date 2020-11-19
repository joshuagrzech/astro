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
} from 'react-native';
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
import {GoogleSignin, GoogleSigninButton} from '@react-native-community/google-signin';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
var Spinner = require('react-native-spinkit');

GoogleSignin.configure({
  webClientId:
    '588113870416-b5u0gtj5iffdbnanhhqtvofvj0191v46.apps.googleusercontent.com',
});

import {
  AppleButton,
  appleAuth,
  AppleAuthRequestScope,
  AppleAuthRequestOperation,
} from '@invertase/react-native-apple-authentication';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  console.log(googleCredential)
  
  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
 
}

async function onAppleButtonPress() {
  // Start the sign-in request
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: AppleAuthRequestOperation.LOGIN,
    requestedScopes: [
      AppleAuthRequestScope.EMAIL,
      AppleAuthRequestScope.FULL_NAME,
    ],
  });

  // Ensure Apple returned a user identityToken
  if (!appleAuthRequestResponse.identityToken) {
    throw 'Apple Sign-In failed - no identify token returned';
  }

  // Create a Firebase credential from the response
  const {identityToken, nonce} = appleAuthRequestResponse;
  const appleCredential = auth.AppleAuthProvider.credential(
    identityToken,
    nonce,
  );

  // Sign the user in with the credential
  return auth().signInWithCredential(appleCredential);
}

async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
  sync: {},
});

export default function App() {
  const [newUser, setNewUser] = useState({complete: false})
  const [startLoad, setStartLoad] = useState(false)

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(false);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (startLoad === true) {
    setTimeout(() => {
      setStartLoad(false)
    }, 5000)
    return(
      <SafeAreaView>
        <View style={{flex: 1, marginTop: '100%', alignItems: 'center'}}>
          
            <Spinner isVisible={true} size={50} type={'ThreeBounce'} color={"black"}/>
          
        </View>
      </SafeAreaView>
    )
  } 
  
  if (newUser.complete === false ) {
    return (
      <Provider store={store} style={{backgroundColor: 'blue'}}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'black', flex: 1}}>
          <View style={{flex: 2, alignItems: 'center', marginTop: '5%'}}>
            <Image
              style={{height: '75%', width: '80%'}}
              source={require('./assets/astrologo.png')}
            />
          </View>
          <View style={{flex: 2, alignContent: 'center', alignItems: 'center'}}>
            <AppleButton
              buttonStyle={AppleButton.Style.WHITE}
              buttonType={AppleButton.Type.SIGN_IN}
              style={{
                width: '50%',
                height: '12%',
              }}
              onPress={() =>
                onAppleButtonPress().then(() =>
                  console.log('Apple sign-in complete!'),
                )
              }
            />
            <TouchableOpacity
              style={{
                margin: '10%',
                backgroundColor: '#3b5998',
                borderRadius: 8,
                padding: 3,
                width: '50%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
              onPress={() =>
                onFacebookButtonPress().then(() =>
                  console.log('Signed in with Facebook!'),
                )
              }>
                <FontAwesomeIcon size={25} icon={faFacebookF} color='white' />
              <Button title="Facebook Sign-In" color={'white'} onPress={() =>
                onFacebookButtonPress()}/>
            </TouchableOpacity>
            <GoogleSigninButton
              style={{ width: '52%', borderRadius: 20}}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={() => onGoogleButtonPress().then(() => {
                setStartLoad(true)
                console.log(user)
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
                  console.log(json)
                  if (json.user) {
                    console.log(json.user)
                    setNewUser(json.user);
                    
                    
                  } else {
                    setNewUser({
                      uid: user.uid,
                      name: user.displayName,
                      email: user.email,
                      setupComplete: false,
                      profilePicture: user.photoURL
                    });
                    
                    
                  }
                  
                }),
              );
              })}
            />
          </View>
        </SafeAreaView>
      </Provider>
    );
  } else if (newUser.setupComplete === false || newUser.setupComplete === true) {
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
