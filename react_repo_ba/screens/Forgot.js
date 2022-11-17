import React, { useState } from 'react';
import { StyleSheet, Text,ImageBackground,View,Image,TextInput,Button,Alert,TouchableOpacity} from 'react-native';
import Checkbox from 'expo-checkbox';
const Forgot = ({navigation})=>{
    const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}>
        <Image
                  style={styles.tinyLogo}
                  source={require('../assets/logo.png')}
        ></Image>
        <TextInput style={styles.tione} placeholder="enter email"></TextInput>

                <TouchableOpacity
                  style = {styles.button2}
                  title="Login"
                  onPress={() => Alert.alert('Simple Button pressed')}
                  ><Text style={{color:"white",marginTop:5}}>Send Link</Text></TouchableOpacity>
      
                <View style={{paddingTop:12}}>
                <Text style={styles.baseText}>Remember your password?<Text onPress={()=>navigation.navigate('Login')} style={styles.steelblue}> Login</Text></Text> 
                </View>
                 
    </ImageBackground>
  </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },  image: {
      flex: 1
    },tinyLogo:{
      marginLeft:90,
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
      marginLeft:80
    },  steelblue: {
      color: "darkblue",
    }
  });

  export default Forgot;