import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { colors } from '@material-ui/core';

const appColors = {
    yellow: "#FCA311",
    grey: "#E5E5E5"
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: "15%",
        backgroundColor: '#fff',
        alignItems: "center",
      },
    
    titleView: {
        padding: 0,
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
    },
    profileContainer: {
        padding: 50,
        backgroundColor: '#fff',
        alignItems: "center",
    }
    
});

export default styles;
