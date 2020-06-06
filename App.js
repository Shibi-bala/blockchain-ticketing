import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Home from './Screens/Home';
import Wallet from './Screens/Wallet';
import Profile from './Screens/Profile';
import Init from './Screens/init'
import SignIn from './Screens/SignIn'
import SignUp from './Screens/SignUp'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import allReducers from './ReduxSetup/index';
import {Provider} from 'react-redux'
import { createStore} from 'redux';
import { createStackNavigator } from '@react-navigation/stack';
import { State } from 'react-native-gesture-handler';
import Nav from './Navigator'



export default function App() {
  
  const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
  
  return (
    <Provider store={store}>
      <Nav/>
    </Provider>
  )
}
