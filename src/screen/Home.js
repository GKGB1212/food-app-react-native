import React,{useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultsList from '../components/ResultsList';

const HomeScreen=()=> {
  //chuỗi tìm kiếm
  const [term,setTerm]=useState(''); 
  const [searchApi,result,errorMessage]=useResult();

  const filterResultsByPrice=(price)=>{
    //price === '$' || '$$' || '$$$'
    return result.filter(result=>{
      return result.price===price;
    });
  };
  return (
    <View style={styles.contain}>
      <SearchBar 
        term={term} 
        onTermChange={newTerm=>setTerm(newTerm)}
        onTermSubmit={()=>searchApi(term)}
      />
      {
        errorMessage?<Text>{errorMessage}</Text>:null
      }
      <ScrollView>
      <ResultsList result={filterResultsByPrice('$')} title="Cost Effective"/>
      <ResultsList result={filterResultsByPrice('$$')} title="Big Pricier"/>
      <ResultsList result={filterResultsByPrice('$$$')} title="Big Spender"/>
      </ScrollView>
    </View>
  );
}

const styles=StyleSheet.create({
  contain:{
    flex:1,
    backgroundColor:'#FAFAFA'
  }
});

export default HomeScreen;