import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity} from 'react-native';
import { render } from 'react-dom';
import styles from '../Styling/appstyle'
import {logIn} from '../ReduxSetup/loggedReducer';
import {useDispatch} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth } from 'aws-amplify'
import {useState} from 'react';

function SignIn({navigation}) {
    const dispatch = useDispatch();
    state = {
        phone_number: '', password: '', user: {}, showConfirmationForm: false
    }
    
     
    function onChangeText(key, val) {
        state[key] = val;
    }

    function onChangeText(key, val) {
        state[key] = val;
    }
    

    const signIn = async() => {
        const { phone_number, password } = state;
        try {
           const user = await Auth.signIn(phone_number, password)
           console.log('user successfully signed in!', user)
           dispatch(logIn());
        } catch (err) {
          console.log('error:', err)
        }
    }


    return(
        <View styles = {styles.container}>
            <View styles = {{margin:50}}>
                    <TextInput
                    style = {styles.input}
                    placeholder = "Phone Number"
                    onChangeText = {val =>onChangeText('phone_number',val)}
                    />
                    <TextInput style={styles.input}
                    style = {styles.input}
                    placeholder = "Password"
                    autoCapitalize = "none"
                    onChangeText={val =>onChangeText('password',val)}
                    />      
                <TouchableOpacity style = {styles.button} onPress={signIn}>
                    <Text>SIGN IN</Text> 
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('SignUp')}>
                    <Text>GO TO SIGN UP</Text> 
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress={() => dispatch(logIn())}>
                    <Text>BYPASS</Text> 
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SignIn;