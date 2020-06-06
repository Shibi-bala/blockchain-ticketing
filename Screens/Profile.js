import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity} from 'react-native';
import styles from '../Styling/appstyle'
import { ScrollView } from 'react-native-gesture-handler';
import {logOut} from '../ReduxSetup/loggedReducer';
import {useDispatch} from 'react-redux'

const Profile = () => {
    const dispatch = useDispatch();
    return(
        
        <View styles = {styles.profileContainer}>
            <Text>ICANTGET THE BUTTON TO COME DOWN</Text>
            <Text>ICANTGET THE BUTTON TO COME DOWN</Text>
            <Text>ICANTGET THE BUTTON TO COME DOWN</Text>
            <Text>ICANTGET THE BUTTON TO COME DOWN</Text>
            <Text>ICANTGET THE BUTTON TO COME DOWN</Text>
            <TouchableOpacity style = {styles.button} onPress={() => dispatch(logOut())}>
                <Text>SIGN OUT</Text> 
            </TouchableOpacity>
        </View>
        
    )
}

export default Profile;