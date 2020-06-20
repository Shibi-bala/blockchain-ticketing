import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../Styling/appstyle'
import { add } from 'react-native-reanimated';

function WalletTicket(item) {

    const url = item['download_url'];

    const title = "Title";
    const address = "Addr";
    const datetime = "1/1 5:00";

    return(
        <View style = {styles.walletTicket}>
            <TouchableOpacity style = {{flexDirection:"row"}} onPress={()=>{console.log('Pressed');}}>
                <Image 
                style={{width: 70, height: 70, borderRadius:10,marginHorizontal:10,marginVertical:5}} 
                source={{uri: url}}/>
                <View style = {{flexDirection:"column"}}>
                    <Text numberOfLines={1} style = {WTStyles.title}>{title}</Text>
                    <Text numberOfLines={1} style = {WTStyles.details}>{address}</Text>
                    <Text style = {WTStyles.details}>{datetime}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
    
}

const WTStyles = StyleSheet.create({
title:{
    fontSize:20,
    fontWeight: "600"
},
details: {
    fontSize:15,
    color: '#333533'
}
});

export default WalletTicket;