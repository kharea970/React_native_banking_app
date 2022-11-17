import React from 'react';
import {StyleSheet,View,TextInput,Button,Alert,TouchableOpacity,Text} from 'react-native'
import Data from './Data';
const Header = (props)=>{

    const [text, onChangeText] = React.useState("");
    return(<View style ={styles.container} >
                <View style={styles.searchbox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Account Number"
                        onChangeText={onChangeText}
                        value={text}
                    />
                </View>
                <View style={styles.searchbutton}>{
                    <TouchableOpacity style={styles.to} onPress={()=>{props.setSelectCity(text)}}>
                        <Text style ={styles.t}>search</Text>
                    </TouchableOpacity>
                }
                </View>
        </View>
        )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        flex:1
    },searchbox:{
        flex:0.75
    },searchbutton:{
        flex:0.25,
    },  input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },to:{
        height: 40,
        marginTop: 12,
        marginRight:4,
        backgroundColor:"black",
        alignItems: "center" },
        t:{color:"white",
        marginTop:7
    }
})
export default Header