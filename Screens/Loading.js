import React from 'react';
import { Text, View, Image, SafeAreaView} from 'react-native';
import styles from '../Styling/appstyle'


const Loading = () => {
    
    return(
        <SafeAreaView>
            <View styles = {styles.loading}>
                <Text style = {styles.title}>TICKT</Text> 
            </View>
        </SafeAreaView>
    )
}

export default Loading;