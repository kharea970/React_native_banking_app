import React, { useState } from 'react';
import {StyleSheet,View,Text,ImageBackground,TouchableOpacity,Image} from 'react-native';
import Header from '../components/Header';
import Data from '../components/Data';

const Home = ({navigation})=>{
    const [selectCity,setSelectCity] = useState("Mumbai")
    return (
        <View style={styles.container} >
            <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.header}>
                    <View style={{flexDirection:"row"}}>
                    <TouchableOpacity
                            style={styles.button0}
                            onPress={()=>navigation.navigate('AddAccount')}
                        >
                            <Image
                                style={styles.tinyLogo3}
                                source={require('../assets/addaccount.png')}
                            ></Image>
                            <Text style={{marginLeft:160}}>AddAccount</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity
                            style={styles.button0}
                            onPress={()=>navigation.navigate('Login')}
                        >
                            <Image
                                style={styles.tinyLogo5}
                                source={require('../assets/logout.png')}
                            ></Image>
                    </TouchableOpacity>   
                    </View>        
                </View>
                <View style={styles.data}>
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={()=>navigation.navigate('Withdraw')}
                        >
                            <Image
                                style={styles.tinyLogo1}
                                source={require('../assets/wdt.png')}
                            ></Image>
                            <Text style={{marginLeft:60}}>Withdraw</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={()=>navigation.navigate('Deposit')}
                        >
                            <Image
                                style={styles.tinyLogo1}
                                source={require('../assets/wdt.png')}
                            ></Image>
                            <Text style={{marginLeft:60}}>Deposit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={()=>navigation.navigate('Transfer')}
                        >
                            <Image
                                style={styles.tinyLogo1}
                                source={require('../assets/wdt.png')}
                            ></Image>
                            <Text style={{marginLeft:60}}>Transfer</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity
                            style={styles.button2}
                            onPress={()=>navigation.navigate('AllAccount')}
                        >
                            <Image
                                style={styles.tinyLogoa}
                                source={require('../assets/acc.png')}
                            ></Image>
                            <Text style={{marginLeft:40}}>All Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button2}
                            onPress={()=>navigation.navigate('Transaction')}
                        >
                            <Image
                                style={styles.tinyLogob}
                                source={require('../assets/transaction.png')}
                            ></Image>
                            <Text style={{marginLeft:60}}>Transactions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button2}
                            onPress={()=>navigation.navigate('OneAccount')}
                        >
                            <Image
                                style={styles.tinyLogoc}
                                source={require('../assets/acc.png')}
                            ></Image>
                            <Text style={{marginLeft:50}}>One Account</Text>
                        </TouchableOpacity>
                    </View>

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
      },header:{flex:0.2},data:{flex:0.8},
      tinyLogo1:{
        marginTop:20,
        marginLeft:60,
        width:50,
        height:50
      },
      tinyLogo2:{
        marginTop:90,
        marginLeft:50,
        width:50,
        height:50
      },
      tinyLogo0:{
        marginTop:30,
        marginLeft:180,
        width:50,
        height:50
      },
      tinyLogo3:{
        marginTop:30,
        marginLeft:180,
        width:50,
        height:50
      }, tinyLogoa:{
        marginTop:80,
        marginLeft:50,
        width:50,
        height:50
      },      tinyLogob:{
        marginTop:80,
        marginLeft:70,
        width:50,
        height:50
      },      tinyLogoc:{
        marginTop:80,
        marginLeft:70,
        width:50,
        height:50
      }      ,tinyLogo5:{
        marginTop:10,
        marginLeft:110,
        width:35,
        height:35
      }
  });

export default Home;