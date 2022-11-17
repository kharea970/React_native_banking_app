import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text,ImageBackground,View,Image,TextInput,Button,Alert,TouchableOpacity} from 'react-native';
const Withdraw = () =>{
    const [account_no,setAccount_no] = useState(null)
    const [amount,setAmount] = useState(null)
    const updateamt = ()=>{
        axios.get(`http://192.168.1.4:8084/withdraw/${account_no}/${amount}`).then((res)=>{

            Alert.alert("amount withdrawn")
        }).catch((err)=>{
            Alert.alert(err.message)
        })
    }
    const submit = ()=>{
        axios.get(`http://192.168.1.4:8084/findaccountById/${account_no}`).then((res)=>{
            if(res.data.length === 0 ){
                Alert.alert("Account no do not exist")
            }else{
                updateamt()
            }
        }
        ).catch(err=>{
            Alert.alert(err.message)
        })

    }
    return(
        <View style={styles.container}>
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
          <TextInput style={styles.titwo} placeholder="enter Account No" onChangeText={setAccount_no}></TextInput>
          <TextInput style={styles.titwo} placeholder="enter Amount" onChangeText={setAmount}></TextInput>
  
                  <TouchableOpacity
                    onPress={() => {submit(account_no,amount)}}
                    style = {styles.button2}
                    title="Add Account"
                    ><Text  style={{color:"white",marginTop:5}}>Withdraw</Text></TouchableOpacity>
        
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

export default Withdraw