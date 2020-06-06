import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity} from 'react-native';
import { render } from 'react-dom';
import styles from '../Styling/appstyle'
import {logIn} from '../ReduxSetup/loggedReducer';
import {useDispatch} from 'react-redux'
const SignIn = () => {
    const dispatch = useDispatch();

    return(
        <View styles = {styles.container}>
            <TouchableOpacity style = {styles.button} onPress={() => dispatch(logIn())}>
                <Text>SIGN IN</Text> 
            </TouchableOpacity>
        </View>
    );
}

export default SignIn;