import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

function FeaturedEventCard(item) {

    const url = item['download_url'];
    return(
        <View style = {{marginHorizontal:5}}>
            <TouchableOpacity onPress={()=>{console.log('Pressed');}}>
                <Image 
                style={{width: Dimensions.get('window').width*0.85, height: Dimensions.get('window').width*0.85*0.75, borderRadius:15}} 
                source={{uri: url}}/>
            </TouchableOpacity>
        </View>
    )
    
}

export default FeaturedEventCard;