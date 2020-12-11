import { createStore, applyMiddleware, compose } from 'redux';
import AstroReducers from './reducers'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';





export const store = createStore(
    AstroReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    
)





console.log('running')

