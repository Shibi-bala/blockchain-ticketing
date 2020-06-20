import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from '../Styling/appstyle'
import { ScrollView } from 'react-native-gesture-handler';
import {logOut} from '../ReduxSetup/loggedReducer';
import {useDispatch} from 'react-redux'

const Profile = () => {
    const dispatch = useDispatch();
    return(
        <SafeAreaView>
            <View styles = {styles.profileContainer}>
                <TouchableOpacity style = {styles.button} onPress={() => dispatch(logOut())}>
                    <Text>SIGN OUT</Text> 
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        
    )
}

export default Profile;