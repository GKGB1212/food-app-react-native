import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    <View>
      <SearchBar 
        term={term} 
        onTermChange={newTerm=>setTerm(newTerm)}
        onTermSubmit={()=>searchApi(term)}
      />
      {
        errorMessage?<Text>{errorMessage}</Text>:null
      }
      <Text>We have found {result.length} results.</Text>
      <ResultsList result={filterResultsByPrice('$')} title="Cost Effective"/>
      <ResultsList result={filterResultsByPrice('$$')} title="Big Pricier"/>
      <ResultsList result={filterResultsByPrice('$$$')} title="Big Spender"/>
    </View>
  );
}

const style=StyleSheet.create({});

export default HomeScreen;