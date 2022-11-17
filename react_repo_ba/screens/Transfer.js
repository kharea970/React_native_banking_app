import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text,ImageBackground,View,Image,TextInput,Button,Alert,TouchableOpacity} from 'react-native';
const Transfer = () =>{
    const [account_no1,setAccount_no1] = useState(null)
    const [account_no2,setAccount_no2] = useState(null)
    const [amount,setAmount] = useState(null)
    const submit2 = ()=>{
        axios.get(`http://192.168.1.4:8084/transfer/${account_no1}/${account_no2}/${amount}`).then((res)=>{

            Alert.alert("amount transfered")
        }).catch((err)=>{
            Alert.alert(err.message)
        })
    }
    const submit1 = ()=>{
        axios.get(`http://192.168.1.4:8084/findaccountById/${account_no2}`).then((res)=>{
            if(res.data.length === 0 ){
                Alert.alert("Account no 2 do not exist")
            }else{
                submit2()
            }
        }
        ).catch(err=>{
            console.log(err)
        })    
    }
    const submit = ()=>{
        axios.get(`http://192.168.1.4:8084/findaccountById/${account_no1}`).then((res)=>{
            if(res.data.length === 0 ){
                Alert.alert("Account no 1 do not exist")
            }else{
                submit1()
            }
        }
        ).catch(err=>{
            console.log(err)
        })
    }
    return(
        <View style={styles.container}>
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
          <TextInput style={styles.titwo} placeholder="enter Account No 1" onChangeText={setAccount_no1}></TextInput>
          <TextInput style={styles.titwo} placeholder="enter Account No 2" onChangeText={setAccount_no2}></TextInput>
          <TextInput style={styles.titwo} placeholder="enter Amount" onChangeText={setAmount}></TextInput>
  
                  <TouchableOpacity
                    onPress={() => {submit(account_no1,account_no2,amount)}}
                    style = {styles.button2}
                    title="Add Account"
                    ><Text  style={{color:"white",marginTop:5}}>Transfer</Text></TouchableOpacity>
        
        </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },  image: {
      flex: 1,
    },tione:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    titwo:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },button1:{
      height:30,
      alignItems:"center",
      backgroundColor:"#DDDDDD",
     margin: 12,
    },button2:{
      height:30,
      alignItems:"center",
      backgroundColor:"black",
     margin: 12,
    },  baseText: {
      align:'center',
      marginLeft:100
    },  steelblue: {
      color: "darkblue",
    }
  });

export default Transfer