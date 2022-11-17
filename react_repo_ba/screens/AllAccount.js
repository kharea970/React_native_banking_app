//http://192.168.1.4:8084/findAllaccounts
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  View, FlatList, StyleSheet, Text,StatusBar } from 'react-native';
const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{`Id= ${title.id}`}</Text>
      <Text style={styles.title}>{`Acc No= ${title.account_no}`}</Text>
      <Text style={styles.title}>{`Acc Name=${title.account_name}`}</Text>
      <Text style={styles.title}>{`Balance=${title.balance}`}</Text>
    </View>
  );
const AllAccount = () =>{
    const [data,setData] = useState(null)
    
    useEffect(()=>{
        console.log("use effect called")
        axios.get("http://192.168.1.4:8084/findAllaccounts").then((response)=>{
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

export default AllAccount