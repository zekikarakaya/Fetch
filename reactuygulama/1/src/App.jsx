import React from 'react';
import { useEffect, useState,useRef, useReducer } from "react";
// import {Route,Routes,Link,NavLink} from 'react-router-dom';
import axios from "axios";
import City from './City';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { FaAnchor,FaAtom } from "react-icons/fa";
// import * as Yup from "yup";
// import { Formik} from "formik";
// import { inputSchema } from "./schemas/index3";


function App() {
  const key ="5d7287143e326e2e0cc553a7c192c1c3";
  const [search,setSearch]=useState("");
  const [city,setCity]=useState("");
  useEffect(() => {
    const getData=async()=>{
    try {
      const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`)
      setCity(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
    }
   getData();
   
  }, [search])
 const changeFunc =(e)=>{
 setSearch(e.target.value);
 }
  return (
    <div className="App">
        <input type='text' placeholder='City to enter' onChange={changeFunc}></input>
        <City city={city}></City>
    </div>
  );
}

export default App;





// dirty formda herhangi bir değişiklik yaptığında,dokunduğunda,oynandığında true olur
// isSubmitting formu submit olduğunda true olur

// asd !dirty forma hiçbir şey yapılmadığında


// {countryData.map((country) => (
//   <div className="mainBoxs" key={country.name.common}>
//     <div className="boxs">
//       <img
//         src={country.flags.png}
//         alt={`${country.name.common} flag`}
//       />
//       <div className="countryInfo">{country.name.common}</div>
//     </div>
//   </div>
// ))}

// {
//   arr.map((ar,i) => {
//     <div key={i}>{ar.name}</div>
//   })
// }



// const [dataList, setDataList] = useState([]);
// const [searchTerm, setSearchTerm] = useState("");
// useEffect(() => {
//   async function getCountries() {
//     try {
//       const response = await fetch("https://restcountries.com/v3.1/all");
//       const data = await response.json();
//       setDataList(data);
//     } catch (error) {
//       console.error("Ülkeleri getirirken hata oluştu:", error);
//     }
//   }

//   getCountries();
// }, []); 
// {/* <h1>ÜLKELER</h1>
// <input
//   placeholder="ÜLKE Giriniz"
//   onChange={(e) => setSearchTerm(e.target.value)}
//   className="search"
//   type="text"
// ></input> */}
// {/* <div>
// {
//   dataList.filter(country=>{
    
//     if(searchTerm ===""){
//       return true;
//     }else if(country.name.common.toLowerCase().includes(searchTerm.toLowerCase().slice(0, searchTerm.length))){
//       return true;
//     }else{
//       return false;
//     }
//   })
//  .map((country) =>(
//     <div key={country.name.common}>
//       <h3>{country.name.common}</h3>
//     </div>
//   ))
// }
// </div> */}