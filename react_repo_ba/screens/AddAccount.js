import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text,ImageBackground,View,Image,TextInput,Button,Alert,TouchableOpacity} from 'react-native';
const AddAccount = () =>{
    const [id,setId] = useState(null)
    const [account_no,setAccount_no] = useState(null)
    const [account_name,setAccount_name] = useState(null)
    const [balance,setBalance] = useState(null)
    const submit= (id,account_no,account_name,balance)=>{
        axios.post("http://192.168.1.4:8084/addaccount/",{
            id,account_no,account_name,balance
        }).then((res)=>{
            Alert.alert("Account added")
        }).catch((err)=>{
            Alert.alert("wrong input")
        })
    }
    return(
        <View style={styles.container}>
        <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
          <TextInput style={styles.tione} placeholder="enter Id" onChangeText={setId}></TextInput>
          <TextInput style={styles.titwo} placeholder="enter Account No" onChangeText={setAccount_no}></TextInput>
          <TextInput style={styles.tione} placeholder="enter name" onChangeText={setAccount_name}></TextInput>
          <TextInput style={styles.titwo} placeholder="enter balance" onChangeText={setBalance}></TextInput>
  
                  <TouchableOpacity
                    onPress={() => {submit(id,account_no,account_name,balance)}}
                    style = {styles.button2}
                    title="Add Account"
                    ><Text  style={{color:"white",marginTop:5}}>Add Account</Text></TouchableOpacity>
        
        </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },  image: {
      flex: 1,
      justifyContent: "center"
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

export default AddAccount