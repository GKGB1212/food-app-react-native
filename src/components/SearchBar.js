import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import yelp from '../api/yelp';

const SearchBar=({term, onTermChange, onTermSubmit})=> {
    return (
      <View style={style.background}>
        <Ionicons name="ios-search" style={style.inputIcon} color="black" />
        <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={style.inputStyle}
            placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}/>
      </View>
    );
}

const style=StyleSheet.create({
    background: {
        backgroundColor:'#F0EEEF',
        height:50,
        borderRadius:5,
        margin:15,
        padding:5,
        flexDirection:'row'
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    inputIcon:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:10
    }
});

export default SearchBar;