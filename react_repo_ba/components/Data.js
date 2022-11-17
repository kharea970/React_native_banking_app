import React,{useEffect,useState} from 'react';
import {StyleSheet,Text,View,Image,Button,TouchableOpacity} from 'react-native';
import { DataTable } from 'react-native-paper';
import Chart from '../screens/Chart';
import axios from 'axios';

//
//

const Data = (props)=>{
    const [main,setMain] = useState()
    const [id,setId] = useState(null)
    const [account_no,setAccount_no] = useState(null)
    const [account_name,setAccount_name] = useState(null)
    const [balance,setBalance] = useState(null)
    
    // const [lat_lon_data,set_lat_lon_data] = useState({})
        useEffect(()=>{
            console.log("use effect called")
            axios.get(`http://192.168.1.4:8084/findaccountById/${props.selectCity}`).then((response)=>{
                        
                            setId(response.data[0].id)
                            setAccount_no(response.data[0].account_no)
                            setAccount_name(response.data[0].account_name)
                            setBalance(response.data[0].balance)
                            setMain(response.data[0])
                })
            .catch(
                err=>{
                    console.log(err);
                  }
            )
        },[props.selectCity])
    
        
    if(main != null){
        return(
            <View style={styles.container}>
                <View>

                </View>
                <View style={{alignItems:"center"}}>
                    <Text style={{fontSize:12,fontWeight:'bold'}}>Account details</Text>
                </View>
                <View>

                </View>
                <View
                    style={{
                        marginTop:6,
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                    />
                <DataTable style={{borderColor:"black"}}>     
                    <DataTable.Row>
                        <DataTable.Cell>Id</DataTable.Cell>
                        <DataTable.Cell>{id}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Account No</DataTable.Cell>
                        <DataTable.Cell>{account_no}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Account Name</DataTable.Cell>
                        <DataTable.Cell>{account_name}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Balance</DataTable.Cell>
                        <DataTable.Cell>{balance}</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
            )
    }else{
        return(<View>
            <Text>No data</Text>
        </View>)
    }
}

const styles = StyleSheet.create(
    {
        container:{
            flexDirection:"column",
            flex:1
        },weathericon:{
            width:100,
            height:100
        },searchbutton:{
            alignItems:"center"
        },to:{
            height: 40,
            width:100,
            marginTop: 12,
            marginRight:4,
            backgroundColor:"black",
            alignItems: "center" },
            t:{color:"white",
            marginTop:7
        }
    }
)
export default Data