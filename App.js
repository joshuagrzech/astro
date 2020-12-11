import 'react-native-gesture-handler';
import React, {useState, useEffect, Suspense, memo} from 'react';
import auth from '@react-native-firebase/auth';
import {Provider} from 'react-redux';
import {store} from './store';

import PhoneSignIn from './src/phoneSignIn/phoneSignInComponent';
import {PersistGate} from 'redux-persist/integration/react';
import Loading from './src/LoadingComponent/LoadingComponent';
const AuthModule = React.lazy(() => import('./src/authModuleContainer'));


function App() {
  // intial state user check
  const [currentUser, setCurrentUser] = useState({checked: false});

  useEffect(() => {
   
    if (!auth().currentUser) {
      //initiate redirect to sign-in if no user found in app state
      console.log('no authentication found in state');
      return setCurrentUser({isAuthenticated: false});
    } else {
      //load user into state - ensures this is completed only once
      const unsubscribe = auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('calling auth from app');
          console.log(`user authenticated w/ uid ${user.uid}`);
          if (Date.now() - Date.parse(user.metadata.creationTime) < 1000) {
            console.log('the user was newly created');
            setCurrentUser({
              uid: user.uid,
              fromState: true,
              setupComplete: false,
              isAuthenticated: true,
            });
          } else if (
            Date.now() - Date.parse(user.metadata.lastSignInTime) >
            10000000
          ) {
            console.log('user not authenticated recently');
            auth().signOut();
            setCurrentUser({isAuthenticated: false})
          } else {
            console.log('this is an existing user');
            setCurrentUser({
              uid: user.uid,
              fromState: true,
              setupComplete: true,
              isAuthenticated: true,
            });
          }
        } else {
          //if firebase auth state changes with no user
          console.log('no authentication found in state');
          return setCurrentUser({isAuthenticated: false});
        }
      });
      return unsubscribe();
    }
  }, []);

  if (currentUser.checked === false) {
    //seen while completeing initial auth state check
    return <Loading />;
  } else if (currentUser.isAuthenticated === true) {
    //user auth was found in state
    return (
      
      <Provider store={store}>
        
          <Suspense fallback={<Loading />}>
            <AuthModule user={currentUser} />
          </Suspense>
        
      </Provider>
    );
  } else if (currentUser.isAuthenticated === false) {
    //user auth was not found in state
    console.log('sending to PhoneSignIn');
    return <PhoneSignIn user={{isAuthenticated: false}} />;
  }
}
export default App;
