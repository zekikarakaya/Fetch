
import { useState, useEffect,useContext } from "react";
import axios from "axios";
import { MainContext } from "../context/context";
const MainPage = () => {
    const [countries, setCountries] = useState([]);
    const {state,dispatch}=useContext(MainContext);
    console.log(state);
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(
            "https://restcountries.com/v3.1/all"
          );
          setCountries(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching country data:", error);
        }
      }
      fetchData();
    }, []);  
    const clickFunc =(country)=>{
       dispatch({type:"ADD_COUNTRY",payload:country})
    }
  return (
    <div>
  <h1>Countries</h1>
      <div className="country-cards">
        {countries.map((country, index) => (
          <div key={index} className="country-card">
            <img
              src={country.flags.svg}
              alt={`${country.name.common}`}
              className="country-flag"
            />
            <div className="country-details">
              <h2>{country.name.common}</h2>
              <p>Population: {country.population}</p>
              <p>Capital: {country.capital}</p>
              <p>Region: {country.region}</p>
              <button onClick={()=>clickFunc(country)}>Ekle</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainPage