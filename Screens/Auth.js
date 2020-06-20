import React from 'react';
import { Text, View, Image, SafeAreaView} from 'react-native';
import styles from '../Styling/appstyle'
import * as LocalAuthentication from 'expo-local-authentication';
import {auth} from '../ReduxSetup/authReducer';
import {useDispatch} from 'react-redux'

const Auth = () => {
    const dispatch = useDispatch();
    const supports = LocalAuthentication.hasHardwareAsync();
    supports.then(runAuth())

    function runAuth() {
        const status = LocalAuthentication.authenticateAsync({promptMessage:"Use Face ID to Login"})
        status.then(dispatch(auth()))
    }


    return(
        <SafeAreaView>
            <View styles = {styles.loading}>
                <Text style = {styles.title}>TICKT</Text> 
            </View>
        </SafeAreaView>
    )
}

export default Auth;