import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Yoga from './waikiki-yoga.jpg';
import Hackathon from './hackathon.jpg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Home from './Home.js'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer inactiveColor="transparent">
      <Tab.Navigator >
      <Tab.Screen name="Wallet" component={Home} options={{
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

        <Tab.Screen name="Profile" component={Home} options={{
        
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={26} />
          ),
        }}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}

