import React, { useState } from 'react';
import {StyleSheet,View,Text,ImageBackground} from 'react-native';
import Header from '../components/Header';
import Data from '../components/Data';

const OneAccount = ({navigation})=>{
    const [selectCity,setSelectCity] = useState(null)
    return (
        <View style={styles.container} >
            <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.header}>
                    <Header setSelectCity={setSelectCity}/>
                </View>
                <View style={styles.data}>
                    <Data selectCity={selectCity} />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        flex:1
    },image: {
        flex: 1,
        justifyContent: "center"
      },header:{flex:0.1},data:{flex:0.9},
  });

export default OneAccount;