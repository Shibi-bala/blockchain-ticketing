import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, Dimensions} from 'react-native';
import AutoScrolling from "react-native-auto-scrolling";
import Yoga from './waikiki-yoga.jpg';
import Hackathon from './hackathon.jpg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Grid from '@material-ui/core/Grid';


const Home = () => {
    const styles = StyleSheet.create({
        container: {
          padding: 50,
        },
      
        titleView: {
          padding: 25
        },
      
        outline: {
          borderWidth: 0.5,
          borderBottomColor: "gray",
          borderRadius: 25,
          padding: 10
      
        },
        scroll: {
          display: "flex",
          flexDirection: "row",
          padding: 25,
      
        },
      
        wrapper: {
          display: "flex",
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

      
       
        imageBack: {
          backgroundColor: "orange",
          borderWidth: 0.2,
          borderBottomColor: "gray",
          borderRadius: 30,
          padding: 5,
          marginTop: 10,
          width: 350
        },
      
        popular: {
          fontSize: 25,
          right: 70,
          padding: 30
        },
       
        title: {
          color: "orange",
          fontSize: 50,
          textAlign: "center",
          
        },
      
        img: {
          width: 175,
          height: 175,
          borderWidth: 1,
          borderColor: "red"
        },
        nearby: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }
      });

    const test = [Yoga, Hackathon];
    const renderItem = ({item, index}) => {
        console.log("we in here/?");
          return (
              <View style={styles.imgView}>
                <Image style= {styles.img} source={Yoga}></Image>
              </View>
          )
      }
      const data = [{src: Yoga, key: 1}, {src: Hackathon, key: 2}];
      const numColumns = 2;
      
      return (

        <View style={styles.container}>
         <TextInput style={styles.outline} placeholder="Search for events..."></TextInput>
         <View style={styles.titleView}>
           <Text style={styles.title}>TICKT</Text>
           <View style={styles.wrapper}>
           <View style={styles.imageBack}>
           <AutoScrolling>
             <View style={styles.scroll}>
               <View>
               <Image style={styles.img} source={Yoga} />
               </View>
               <View>
               <Image style={styles.img} source={Hackathon} />
               </View>
             </View>
             
           </AutoScrolling>
           </View>
           </View>
           <Text style={styles.popular}>Popular Near You</Text>
            <FlatList 
            data={data} 
            style={styles.cont}
            renderItem={renderItem}
            numColumns={numColumns}></FlatList>
                <Text>HELLO</Text>
           
         </View>
           </View>
   
       
      
     );
}
export default Home;