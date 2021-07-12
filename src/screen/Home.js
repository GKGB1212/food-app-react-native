import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';

const HomeScreen=()=> {
  //chuỗi tìm kiếm
  const [term,setTerm]=useState('');
  //mảng kết quả
  const [result,setResult]=useState([]);

  //hàm tìm kiếm
  const searchApi= async ()=>{
    const response=await yelp.get('/search',{
      params:{
        limit:50,
        term,//có thể ghi mỗi term vì tên nó giống nhau
        location:'san jose'
      }
    });
    setResult(response.data.businesses);
  };
  return (
    <View>
      <SearchBar 
        term={term} 
        onTermChange={newTerm=>setTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      <Text>We have found {result.length} results.</Text>
    </View>
  );
}

const style=StyleSheet.create({});

export default HomeScreen;