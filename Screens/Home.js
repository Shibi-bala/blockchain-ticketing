import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, Dimensions, SafeAreaView} from 'react-native';
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
import BasicEventCard from '../CustomComponents/BasicEventCard';
import Constants from 'expo-constants';
import InfiniteScroll from 'react-native-infinite-looping-scroll';
import FeaturedEventCard from '../CustomComponents/FeaturedEventCard';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      populardata: [],
      featureddata: [],
      error: null,
      refreshing: false,
    };
  }
//const Home = () => {
  componentDidMount() {
    this.makeRemoteReq();
  }  

  makeRemoteReq = () => {
    const randImagesURL = 'https://picsum.photos/v2/list?page=2&limit=20';
  
    this.setState({ loading: true });
    fetch(randImagesURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          populardata: res,
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
    const randImagesURL2 = 'https://picsum.photos/v2/list?page=3&limit=20';
  
    this.setState({ loading: true });
    fetch(randImagesURL2)
      .then(res => res.json())
      .then(res => {
        this.setState({
          featureddata: res,
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }


    
  render(){
    return (
      <SafeAreaView style = {{backgroundColor:"#fff"}}>
        <View style = {{paddingBottom:10,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: 'center',}}>
          <TextInput style={styles.search} placeholder="Search for events..."></TextInput>
        </View>
        <ScrollView style = {{paddingTop:Constants.statusBarHeight+10}} keyboardDismissMode = 'on-drag'> 
          <View style={styles.container}>
            
            <View style={styles.titleView}>
              <Text style={styles.title}>TICKT</Text>
              <View style = {{margin:0}} >
              <FlatList
              showsHorizontalScrollIndicator={false}
              data = {this.state.featureddata}
              renderItem={({item}) => FeaturedEventCard(item)}
              horizontal = {true}
              style={styles.cont}
              snapToAlignment={"start"}
              snapToInterval={Dimensions.get('window').width*0.85 + 10} // 200 is image width
              decelerationRate={"fast"}/>
              </View>
              </View>
              <View style={styles.popular}>
              <Text style={styles.headerText}>Popular Near You</Text>
              <FlatList 
              showsHorizontalScrollIndicator={false}
              data={this.state.populardata} 
              horizontal = {true}
              style={{}}
              renderItem={({item}) => BasicEventCard(item)}
              snapToAlignment={"start"}
              snapToInterval={200 + 10} // 200 is image width
              decelerationRate={"fast"}
              />
              <Text style={styles.headerText}>Recommended</Text>
              <FlatList 
              showsHorizontalScrollIndicator={false}
              data={this.state.populardata} 
              horizontal = {true}
              style={{}}
              renderItem={({item}) => BasicEventCard(item)}
              snapToAlignment={"start"}
              snapToInterval={200 + 10} // 200 is image width
              decelerationRate={"fast"}
              />
              </View>
          </View>
        </ScrollView>
      </SafeAreaView>
       
      
     );
  }
}
export default Home;