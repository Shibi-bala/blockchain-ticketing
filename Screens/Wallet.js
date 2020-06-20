import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, Dimensions, SafeAreaView} from 'react-native';
import styles from '../Styling/appstyle'
import { ScrollView } from 'react-native-gesture-handler';
import WalletTicket from '../CustomComponents/WalletTicket';

class Wallet extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          data: [],
          error: null,
          refreshing: false,
        };
    }
    
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
            data: res,
            error: res.error || null,
            loading: false,
            refreshing: false
        });
        })
        .catch(error => {
        this.setState({ error, loading: false });
        });
    }

    render() {
        return(

            <SafeAreaView>
                <View style = {{alignItems:'center'}}>
                    <Text style={styles.title}>Wallet</Text>
                    <FlatList 
                        
                        data={this.state.data} 
                        style={{}}
                        renderItem={({item}) => WalletTicket(item)}
                        />
                </View>
            </SafeAreaView>
        );
    }
}

export default Wallet;