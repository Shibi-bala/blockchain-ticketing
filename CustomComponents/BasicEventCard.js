import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function BasicEventCard(item) {

    const url = item['download_url'];
    return(
        <View style = {{marginHorizontal:5}}>
            <TouchableOpacity onPress={()=>{console.log('Pressed');}}>
                <Image 
                style={{width: 200, height: 150, borderRadius:15}} 
                source={{uri: url}}/>
            </TouchableOpacity>
        </View>
    )
    
}

export default BasicEventCard;