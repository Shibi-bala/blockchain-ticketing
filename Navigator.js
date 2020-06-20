import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Home from './Screens/Home';
import Wallet from './Screens/Wallet';
import Profile from './Screens/Profile';
import Loading from './Screens/Loading'
import SignIn from './Screens/SignIn'
import SignUp from './Screens/SignUp'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import allReducers from './ReduxSetup/index';
import {Provider} from 'react-redux'
import { createStore} from 'redux';
import { createStackNavigator } from '@react-navigation/stack';
import { State } from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux'
import { View } from 'react-native';
import Auth from './Screens/Auth';

const tabStyle = {activeTintColor : "#FCA311", inactiveTintColor : "black", showLabel : false};
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Nav() {
    const loggedIn = useSelector(state => state.isLogged);
    const authIn = useSelector(state => state.isAuth);
    if (State.isLoading) {
       return(<Loading/>);
    }
    if(!loggedIn){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName = "SignIn" headerMode = "float">
                    <Stack.Screen name = "SignIn" component = {SignIn}/>
                    <Stack.Screen name = "SignUp" component = {SignUp}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        if (!authIn){
            return(<Auth/>);
        } else{
            return (
                <NavigationContainer>
                    <Tab.Navigator initialRouteName = 'Home' tabBarOptions = {tabStyle} >
                        <Tab.Screen name="Wallet" component={Wallet} options={{
                        color: "transparent",
                        
                        tabBarIcon: ({ color }) => (
                            <Icon name="money" color={color} size={22} />
                        ),
                        }}/>
                        <Tab.Screen name="Home" component={Home} options={{
                        
                        tabBarIcon: ({ color }) => (
                            <Icon name="home" color={color} size={26} />
                        ),
                        }}/>

                        <Tab.Screen name="Profile" component={Profile} options={{
                        
                        tabBarIcon: ({ color }) => (
                            <Icon name="user" color={color} size={26} />
                        ),
                        }}/>
                    
                    </Tab.Navigator>
                </NavigationContainer>
            )
        }
    }
}