import React, {useState,useEffect} from 'react';
import {View, Button,  Text, StyleSheet, Image, FlatList} from 'react-native';
import yelp from '../api/yelp';

import { useNavigation } from '@react-navigation/native';

const ResultsShowScreen=({ route: { params } })=>{
    const [result, setResult]=useState([]);
    const navigation=useNavigation();

    const { id } = params;

    console.log(result);

    const getResult= async (id)=>{
        try{
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        }catch(e){

        }
    };
    useEffect(()=>{
        getResult(id);
    },[]);

    return (<View style={styles.contain}>
        <Text style={styles.name}>{result.name}</Text>
        <Text style={styles.phone}>Phone: {result.display_phone}</Text>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={result.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({item})=>{
                return <Image style={styles.image} source={{uri: item }}/>
            }}
        />
    </View>)
};

const styles=StyleSheet.create({
    contain:{
        flex:1,
        backgroundColor:'#FAFAFA',
        paddingHorizontal:15,
        paddingTop:15
    },
    image:{
        width:'100%',
        height:220,
        borderRadius:8,
        marginBottom:15
    },
    name:{
        fontSize:30,
        fontWeight:'bold',
    },
    phone:{
        fontSize:20,
        marginVertical:10
    }
});

export default ResultsShowScreen;