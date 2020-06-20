import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, TextInput } from 'react-native';
import { colors } from '@material-ui/core';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const appColors = {
    yellow: "#FCA311",
    grey: "#E5E5E5"
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: "15%",
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: 'center'
      },
    
    titleView: {
        paddingBottom: 10,
        alignItems: "center",
        height: 300
    },

    search: {   
        backgroundColor: appColors.grey,
        borderRadius: 25,
        alignItems: "center",
        width: "80%",
        height: 40,
        padding: 10

    },
    scroll: {
    display: "flex",
    flexDirection: "row",
    padding: 25,

    },

    popular: {
        flex: 1,
        alignItems: "center"
    },

    cont: {
        flex: 1,
        marginVertical: 20
    },

    imgView: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        margin: 1,
    },
    headLine: {
        flex:1,
        padding: 5,
        marginTop: 10,
    },

    headerText: {
    fontSize: 25,
    right: 70,
    padding: 30
    },
    
    title: {
        color: "#000",
        fontSize: 50,
        textAlign: "center",
    
    },

    img: {
    width: 175,
    height: 175,
    borderWidth: 1,
    borderColor: "black"
    },

    nearby: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    button:{
        backgroundColor:'#DDDDDD',
        alignItems:'center',
        padding:10,
        borderRadius:30,
        margin:10
    },
    profileContainer: {
        padding: 50,
        backgroundColor: '#fff',
        alignItems: "center",
    },
    input : {
        backgroundColor : appColors.grey,
        borderRadius: 14,
        padding: 8,
        margin: 5,
        width: "80%"
    },
    walletTicket : {
        width:Dimensions.get('window').width-14,
        borderRadius:10,
        margin:7,
        backgroundColor:"#fff"
    },
    loading: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: 'center'
    }
    
});

export default styles;
