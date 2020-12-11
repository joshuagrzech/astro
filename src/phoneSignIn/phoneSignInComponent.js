import React, {useState, Suspense} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Image,
  Alert,
} from 'react-native';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {persistor} from '../../store';
import {PersistGate} from 'redux-persist/integration/react';
import * as Animatable from 'react-native-animatable';
import auth from '@react-native-firebase/auth';
import styles from '../stylesheet';
import Loading from '../LoadingComponent/LoadingComponent';
const AuthModule = React.lazy(() => import('../authModuleContainer'));
var Spinner = require('react-native-spinkit');
const astroLogo = require('../../assets/astrologoicon.png');

//prompts for sign in - redirects to authModule upon code confirmation
export default function PhoneSignIn() {
  const [confirm, setConfirm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('+1');
  const [currentUser, setCurrentUser] = useState();

  async function signInWithPhoneNumber(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      Alert.alert('Invalid phone number.');
      setConfirm(null);
    }
  }

  async function confirmCode() {
    try {
      const codeConfirmation = await confirm.confirm(code);
      setConfirmLoading(codeConfirmation);
    } catch (error) {
      Alert.alert('Invalid code.');
      setConfirmLoading(false);
    }
  }

  function isConfirmLoading() {
    if (confirmLoading === false) {
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
                height: '100%',
                width: '100%',

                flex: 1,
              }}
              source={astroLogo}
            />

            <View style={{flex: 1}}>
              <View
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  flex: 1,
                }}>
                <View style={{flex: 0.75}}>
                  <Animatable.View animation="zoomInLeft">
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
                  </Animatable.View>
                </View>
                <View style={{flex: 1}}>
                  <Animatable.View animation="zoomInLeft">
                    <TouchableOpacity
                      onPress={() => {
                        confirmCode(code);
                      }}
                      style={styles.blueButton}>
                      <Text style={styles.whiteButtonText}>Confirm</Text>
                    </TouchableOpacity>
                  </Animatable.View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      );
    } else {
      setTimeout(
        () =>
          setCurrentUser({
            authenticatedFromPhone: true,
            isAuthenticated: false,
          }),
        3000,
      );
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
                height: '100%',
                width: '100%',

                flex: 1,
              }}
              source={astroLogo}
            />

            <View style={{flex: 1}}>
              <View style={{flex: 1}}>
                <Spinner
                  isVisible={true}
                  color={'white'}
                  size={50}
                  type={'Pulse'}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      );
    }
  }

  function initLoading() {
    if (loading === true) {
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
                height: '100%',
                width: '100%',

                flex: 1,
              }}
              source={astroLogo}
            />

            <View style={{flex: 1}}>
              <View
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  flex: 1,
                }}>
                <View style={{flex: 0.75}}></View>
                <View style={{flex: 1}}>
                  <Spinner
                    isVisible={true}
                    color={'white'}
                    size={50}
                    type={'Pulse'}
                  />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      );
    } else if (loading === false) {
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
                height: '100%',
                width: '100%',

                flex: 1,
              }}
              source={astroLogo}
            />

            <View style={{flex: 1}}>
              <View
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  flex: 1,
                }}>
                <View style={{flex: 0.75}}>
                  <Animatable.View animation="fadeInDownBig">
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
                  </Animatable.View>
                </View>
                <View style={{flex: 1}}>
                  <Animatable.View animation="fadeInUpBig">
                    <TouchableOpacity
                      onPress={() => {
                        setLoading(true);
                        signInWithPhoneNumber(phoneNumber);
                      }}
                      style={styles.blueButton}>
                      <Text style={styles.whiteButtonText}>Continue</Text>
                    </TouchableOpacity>
                  </Animatable.View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      );
    }
  }

  if (!currentUser) {
    if (!confirm) {
      return initLoading();
    } else if (confirm) {
      return isConfirmLoading();
    }
  } else {
    return (
      <Provider store={store}>
       
          <Suspense fallback={<Loading />}>
            <AuthModule user={currentUser} />
          </Suspense>
        
      </Provider>
    );
  }
}
