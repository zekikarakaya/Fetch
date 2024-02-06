import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import reducer, { initialState } from "../reducer";
import Gidilecekler from "./Gidilecekler";

const Home = () => {
  const [newData, setNewData] = useState([]);
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getUser();
  }, [input]);
  const getUser = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${input}`
      );
      console.log(response.data);
      setNewData(response);
      if (Array.isArray(response.data)) {
        setNewData(response.data);
      } else {
        setNewData([]);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const clickFunc = (country) => {
    dispatch({ type: "ADD_ÜLKE", payload: country });
  };
  console.log(state.gidilecekler);
  
  return (
    <div>
        
        <div className="inputc">
        <input
          type="text"
          placeholder="Enter Country.."
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </div>

       {newData.map((country) => (
    <div key={country.name.common}>
      <div className="box">
        <img src={country.flags.png} alt={country.name.common}></img>
        <div className="countryInfo">{country.name.common}</div>
        <p>Başkent:{country.capital}</p>
        <button onClick={()=>clickFunc(country)}>Ekle</button>
      </div>
    </div>
  ))}
        {
            state.gidilecekler && <Gidilecekler gidilecekler={state.gidilecekler}></Gidilecekler>
        }
    
    
    </div>
  );
};

export default Home;

