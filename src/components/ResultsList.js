import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList=({title, result})=>{
    return <View style={styles.contain}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={result}
            keyExtractor={(result)=>result.id}
            renderItem={({item})=>{
                return <ResultsDetail result={item} />;
            }}
        />
    </View>
};

const styles=StyleSheet.create({
    contain:{
        marginBottom:10
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    }
});

export default ResultsList;