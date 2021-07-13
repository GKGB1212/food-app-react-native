import { useState,useEffect } from "react";
import yelp from "../api/yelp";

export default()=>{
    //mảng kết quả
    const [result,setResult]=useState([]);
    //chuỗi lỗi
    const [errorMessage,setErrorMessage]=useState('');

    //hàm tìm kiếm
    const searchApi= async searchTerm=>{
        try{
        const response=await yelp.get('/search',{
            params:{
            limit:50,
            term:searchTerm,//có thể ghi mỗi term vì tên nó giống nhau
            location:'san jose'
            }
        });
        setErrorMessage();
        setResult(response.data.businesses);
        }catch(err){
            setErrorMessage('Something went wrong!!!');
        }
    };
    useEffect(()=>{
        searchApi('pasta');
    },[])

    return [searchApi,result,errorMessage];

};