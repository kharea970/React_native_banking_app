import React, { useEffect, useState } from 'react';
import { StyleSheet, Text,ImageBackground,View,Image,TextInput,Button,Alert,TouchableOpacity} from 'react-native';
import Checkbox from 'expo-checkbox';
import axios from 'axios';
const Login = ({navigation})=>{

  const [isChecked, setChecked] = useState(false);
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [data,setData] = useState(null)
const validateUser = (email,password)=>{

}
const submit = (email,password)=>{
  axios.get(`http://192.168.1.4:8082/finduserbyemail/${email}`).then(
    (response)=>{
        setData(response.data)
        console.log(response.data)
        if(data!=null && data[0].password === password){
          navigation.navigate('Home');
        }else{
          console.log(data)
          Alert.alert("wrong Email or Password")
        }
      }
      ).catch(err=>{console.log(err)})



}

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
        <Image
                  style={styles.tinyLogo}
                  source={require('../assets/logo.png')}
        ></Image>
        <TextInput style={styles.tione} placeholder="enter email" onChangeText={setEmail}></TextInput>
        <TextInput style={styles.titwo} placeholder="enter password" onChangeText={setPassword}secureTextEntry={true}></TextInput>

                <TouchableOpacity
                  onPress={() => {submit(email,password)}}
                  style = {styles.button2}
                  title="Login"
                  ><Text  style={{color:"white",marginTop:5}}>Login</Text></TouchableOpacity>
      
                <View style={{paddingTop:12}}>
                <Text style={styles.baseText}>Trouble logging in ?<Text onPress={()=>navigation.navigate('Forgot')} style={styles.steelblue}> Forgot Password</Text></Text> 
                </View>
                
                <View
            style={{
              paddingTop:200,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <Text style={styles.baseText}>Don't have an account?<Text onPress={()=>navigation.navigate('SignUp')} style={styles.steelblue}> Sign up.</Text></Text> 
    </ImageBackground>
  </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },  image: {
      flex: 1,
      justifyContent: "center"
    },tinyLogo:{
      marginLeft:100,
      width: 200,
      height: 200,
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

  export default Login;