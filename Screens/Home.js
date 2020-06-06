import React from 'react';
import { SStyleSheet, Text, View, Image, FlatList, TextInput, Dimensions} from 'react-native';
import AutoScrolling from "react-native-auto-scrolling";
import Yoga from '../waikiki-yoga.jpg';
import Hackathon from '../hackathon.jpg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Grid from '@material-ui/core/Grid';
import styles from '../Styling/appstyle'
import { ScrollView } from 'react-native-gesture-handler';
import { render } from 'react-dom';


const Home = () => {
    

    const test = [Yoga, Hackathon];
    const headItem = ({item, index}) => {
        console.log("we in here/?");
          return (
              <View style={styles.imgView}>
                <Image style= {styles.img} source={Yoga}></Image>
              </View>
          )
      }
    const data = [{src: Yoga, key: '1'}, {src: Hackathon, key: '2'}];
     const numColumns = 2;
      
    return (
      <ScrollView style = {{backgroundColor:'#fff'}}>
      <View style={styles.container}>
        <TextInput style={styles.search} placeholder="Search for events..."></TextInput>
        <View style={styles.titleView}>
          <Text style={styles.title}>TICKT</Text>
          <View style={styles.headLine}>
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
          <View style={styles.popular}>
          <Text style={styles.headerText}>Popular Near You</Text>
          <FlatList 
          data={data} 
          horizontal = {true}
          style={styles.cont}
          renderItem={headItem}
          />
          <Text>HELLO</Text>
          </View>
        
      </View>
      </ScrollView>
       
      
     );
}
export default Home;