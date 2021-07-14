import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ResultsDetail from './ResultsDetail';

const ResultsList=({title, result})=>{
    if(!result.length){
        return null;
    }
    const navigation = useNavigation();
    return <View style={styles.contain}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={result}
            keyExtractor={(result)=>result.id}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={()=> 
                        navigation.navigate('Results Show', {id:item.id})}>
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                ) ;
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