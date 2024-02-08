import React, { useContext } from 'react'
import { MainContext } from '../context/context'
import { FaCheck } from "react-icons/fa";
const ToGoCountry = () => {
    const {state,dispatch}=useContext(MainContext);
    console.log(state);
    const completeFunc =(country)=>{
      dispatch({type:"COMPLETE_COUNTRY",payload:country})
    }
  return (
    <div>  
             <div className="country-cards">
        {state.togoCountry.map((country, index) => (
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
              <button onClick={()=>completeFunc(country)}><FaCheck /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToGoCountry