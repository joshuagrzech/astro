/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { NativeModules } from 'react-native'

if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true)
}



AppRegistry.registerComponent(appName, () => App);
