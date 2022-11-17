import React, { useEffect, useState } from 'react';
import { StyleSheet, Text,ImageBackground,View,Image,TextInput,Button,Alert,TouchableOpacity} from 'react-native';
import Checkbox from 'expo-checkbox';
import axios from 'axios';
const validateemail = (email)=>{
  
}
const SignUp = ({navigation})=>{
    const [isChecked, setChecked] = useState(false);
    const [emailError, setEmailError] = useState(true)
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    //const [password2,setPassword2] = useState("")
    const [passwordError,setPasswordError] = useState(true)
    const [dbpass,setdbPass] = useState(false)
    const [userInfo,setUserInfo] = useState(null)
    const validateEmail = (e) => {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(e) === false) {
        setEmailError(true)

      }
      else {
        setEmail(e)
        setEmailError(false)
      }
    }

    const validatePassword = (email,password)=>{
      if(!(emailError) && password!=null && email!=null){
        setPasswordError(false)
        setdbPass(true)
        axios.post("http://192.168.1.4:8082/adduser/",{
          email,password
              }).then((response)=> {
                navigation.navigate('Login')
            }).catch(function (error) {
              Alert.alert(error.message)
          });
    }else{
      Alert.alert("wrong email or password")
    }
    }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
        <Image
                  style={styles.tinyLogo}
                  source={require('../assets/logo.png')}
        ></Image>
        <TextInput style={styles.tione} placeholder="enter email" onChangeText={(e) => validateEmail(e)} ></TextInput>
        {/* <Text style={{
          color: 'black',
          marginLeft:14,
          marginTop:4
        }}>{emailError}</Text> */}
        <TextInput style={styles.titwo} placeholder="enter password"    onChangeText={setPassword} value={password} secureTextEntry={true}></TextInput>
        {/* <TextInput style={styles.titwo} placeholder="Re-enter password" onChangeText={setPassword2} value={password2} secureTextEntry={true}></TextInput> */}
        <View style={styles.fixToText}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
            /><Text> Agree to term and conditions</Text>
            </View>
              
                <TouchableOpacity

                  style = {isChecked ? styles.button2 : styles.button1}
                  disabled={!isChecked && !emailError}
                  title="Signup"
                  onPress={() => {
                    validatePassword(email,password)
                  }}
                  ><Text style={{color:"white",marginTop:5}}>SignUp</Text></TouchableOpacity>
      
                <View style={{paddingTop:12}}>
                <Text style={styles.baseText}>Already have an Account? <Text onPress={()=>navigation.navigate('Login')} style={styles.steelblue}> Login</Text></Text> 
                </View>
                

    </ImageBackground>
  </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },  image: {
      flex: 1,
      
    },tinyLogo:{
        marginTop:60,
      marginLeft:90,
      width: 200,
      height: 100,
    },tione:{
      height: 40,
      marginTop: 15,
      marginLeft: 12,
      marginRight: 12,
      borderWidth: 1,
      padding: 10,
    },
    titwo:{
      height: 40,
      marginTop: 12,
      marginLeft: 12,
      marginRight: 12,
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
      marginLeft:80
    },  steelblue: {
      color: "darkblue",
    },  fixToText: {
      marginTop:8,
      flexDirection: 'row',
      justifyContent: 'center',
    }
  });

  export default SignUp;