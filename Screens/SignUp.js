import React, {useState} from 'react';
import { StyleSheet, Text, Button, View, TextInput, TouchableOpacity} from 'react-native';
import { render } from 'react-dom';
import styles from '../Styling/appstyle'
import { Auth } from 'aws-amplify';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useDispatch} from 'react-redux'
import PhoneInput from 'react-native-phone-input'
import {logIn} from '../ReduxSetup/loggedReducer';

function SignUp({navigation}) {
    const dispatch = useDispatch();
    const state = {
        name:'', family_name:'', password: '', email: '', phone_number: '', authenticationCode: ''
    }

    const [showConfirmation, switchConfirmation] = useState(false);
    const [phone, pushPhoneNumber] = useState(''); 

    function onChangeText(key, val) {
        state[key] = val;
    }

    function startConfirmation() {
        switchConfirmation(true);
    }

    const signUp = async () => {
        const { name, family_name, password, email, phone_number } = state
        console.log(phone_number);
        try {
            const userStatus = await Auth.signUp({
                username:phone_number,
                password:password,
                attributes: {
                    name:name,
                    family_name:family_name,
                    email:email,          
                }
            });
          console.log('user successfully signed up!: ', userStatus)
          pushPhoneNumber(phone_number);
          startConfirmation();
        } catch (err) {
          console.log('error signing up: ', err)
        }
    }

    
    const confirmSignUp = async () => {
        const { authenticationCode } = state
        try {
          await Auth.confirmSignUp(phone, authenticationCode)
          console.log('successully signed up!')
          alert('User signed up successfully!')
          dispatch(logIn());
        } catch (err) {
          console.log('error confirming signing up: ', err)
        }
    }
    if (!showConfirmation) {
        return(
            <View>
                <View styles = {{padding:50}}>
                    <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('SignIn')}>
                        <Text>GO TO SIGN IN</Text> 
                    </TouchableOpacity>
                    <TextInput style={styles.input}
                    placeholder = "First Name"
                    autoCapitalize = "words"
                    onChangeText={val =>onChangeText('name',val)}
                    />
                    <TextInput style={styles.input}
                    placeholder = "Last Name"
                    autoCapitalize = "words"
                    onChangeText={val =>onChangeText('family_name',val)}
                    />
                    <TextInput style={styles.input}
                    placeholder = "Email"
                    autoCapitalize = "none"
                    onChangeText={val =>onChangeText('email',val)}
                    />
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
                    <TouchableOpacity style = {styles.button} onPress={signUp}>
                        <Text>SIGN UP</Text> 
                    </TouchableOpacity> 
                </View>
            </View>
        )
    } else {
        return(
        <View>
            <View>
                <View styles = {{padding:50}}>
                    <TextInput
                    style={styles.input}
                    placeholder='Authentication code'
                    autoCapitalize="none"
                    onChangeText={val => onChangeText('authenticationCode', val)}
                    />
                <Button
                    title='Confirm Sign Up'
                    onPress={confirmSignUp}
                />
                </View>
            </View>
        </View>
        )
    }
}

export default SignUp;