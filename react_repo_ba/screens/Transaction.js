//http://192.168.1.4:8084/findTransactions
//http://192.168.1.4:8084/findAllTransfers
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  View, FlatList, StyleSheet, Text,StatusBar } from 'react-native';
const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{`From Acc = ${title.account1}`}</Text>
      <Text style={styles.title}>{`Acc2/with/depo  = ${title.account2}`}</Text>
      <Text style={styles.title}>{`Amount =${title.balance}`}</Text>
    </View>
  );
const Transaction = () =>{
    const [data,setData] = useState(null)
    
    useEffect(()=>{
        console.log("use effect called")
        axios.get("http://192.168.1.4:8084/findAllTransfers").then((response)=>{
                setData(response.data)
            })
        .catch(
            err=>{
                console.log(err);
                
              }
        )
    },[])

    const renderItem = ({ item }) => (
        <Item title={item} />
      );
    return(
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#71c1dc',
      padding: 10,
      marginVertical: 4,
      marginHorizontal: 8,
    },
    title: {
      fontSize: 16,
    },
  });

export default Transaction