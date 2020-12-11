import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import AppNavigator from './navigation/NavigationContainer';
import ZodiacStack from './zodiacStack';
import Loading from './LoadingComponent/LoadingComponent';

const AuthModule = React.memo(
  (props) => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
      //ensures authCheck is only completed when ther is no exisiting authentication
      if (
        props.user.isAuthenticated === false &&
        props.user.authenticatedFromPhone === true
      ) {
        console.log('PhoneSignIn completed');
        const unsubscribe = auth().onAuthStateChanged((user) => {
          console.log('PhoneSignIn Intiated');
          if (user) {
            console.log('calling auth from module');
            console.log(`user authenticated w/ uid ${user.uid}`);
            if (Date.now() - Date.parse(user.metadata.creationTime) < 1000) {
              console.log('the user was newly created');
              setCurrentUser({
                ...user,
                setupComplete: false,
                isAuthenticated: true,
              });
            } else if (
              Date.now() - Date.parse(user.metadata.lastSignInTime) >
              10000000
            ) {
              console.log('user not authenticated recently');
              auth().signOut();
            } else {
              console.log('this is an existing user');
              setCurrentUser({
                ...user,
                setupComplete: true,
                isAuthenticated: true,
              });
            }
          }
        });
        return unsubscribe();
      }
    }, [props.user]);

    if (props.user.isAuthenticated === true) {
      if (props.user.setupComplete === true) {
        console.log('user has signed in previously');
        if (
          props.stateUser === null ||
          props.stateUser === undefined ||
          props.stateUser.setupComplete === false
        ) {
          console.log('the users information is not found in store');
          console.log('setup has not been completed');
          console.log('new user process has initiated');

          return (
            <ZodiacStack
              user={{
                uid: props.user.uid,
                setupComplete: false,
              }}
            />
          );
        } else if (props.stateUser.setupComplete === true) {
          console.log('user has been found in store');
          console.log('directing to home screen');
          return <AppNavigator />;
        }
      } else if (props.user.setupComplete === false) {
        console.log('this is a new user');
        return <ZodiacStack user={props.user} />;
      }
    } else if (props.user.isAuthenticated === false) {
      console.log('directed from PhoneSignIn');
      if (!currentUser) {
        console.log('waiting for auth');
        return <Loading />;
      } else if (currentUser) {
        if (
          props.stateUser === null ||
          props.stateUser === undefined ||
          props.stateUser.setupComplete === false
        ) {
          console.log('the users information is not found in store');
          console.log('setup has not been completed');
          console.log('new user process has initiated');

          return (
            <ZodiacStack
              user={{
                uid: currentUser.uid,
                setupComplete: false,
              }}
            />
          );
        } else if (props.stateUser.setupComplete === true) {
          console.log('user has been found in store');
          console.log('directing to home screen');
          return <AppNavigator />;
        }
      } else if (currentUser.setupComplete === false) {
        console.log('this is a new user');
        return <ZodiacStack user={currentUser} />;
      }
    }
  },
  (prevProps, nextProps, prevState, nextState) =>
    prevProps.user.isAuthenticated === nextProps.user.isAuthenticated ||
    prevState.currentUser.isAuthenticated ===
      nextState.currentUser.isAuthenticated,
);

export default AuthModule;
