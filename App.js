import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Loading from './Screens/Loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import allReducers from './ReduxSetup/index';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware} from 'redux';
import { createStackNavigator } from '@react-navigation/stack';
import { State } from 'react-native-gesture-handler';
import Nav from './Navigator'
import Amplify from 'aws-amplify'
import config from './aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
import {persistStore, persistReducer} from 'redux-persist'
import {createLogger} from 'redux-logger'
import { AsyncStorage } from 'react-native';
import {PersistGate} from 'redux-persist/es/integration/react'

Amplify.configure(config)

const persistConfig = {
  key:'root',
  storage:AsyncStorage,
  whitelist:['wallet','isLogged'],
  blacklist:['isAuth']
}

const persistedReducer = persistReducer(persistConfig, allReducers)

function App() {
  const store = createStore(persistedReducer, applyMiddleware(createLogger()),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
  const persistedStore = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={Loading()} persistor={persistedStore}>
        <Nav/>
      </PersistGate>
    </Provider>
  )
}

export default App;