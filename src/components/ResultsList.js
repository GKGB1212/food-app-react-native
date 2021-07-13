import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ResultsList=({title, result})=>{
    return <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            data={result}
            keyExtractor={(result)=>result.id}
            renderItem={({item})=>{
                return <Text>{item.name}</Text>
            }}
        />
    </View>
};

const styles=StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:'bold'
    }
});

export default ResultsList;