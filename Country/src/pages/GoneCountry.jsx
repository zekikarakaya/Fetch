
import React, { useContext } from 'react'
import { MainContext } from '../context/context'
import { TiDeleteOutline } from "react-icons/ti";
const GoneCountry = () => {
    const {state,dispatch}=useContext(MainContext);
    const deleteFunc=(country)=>{
       dispatch({type:"DELETE_COUNTRY",payload:country})
    }
  return (
    <div>
          <div className="country-cards">
        {state.goneCountry.map((country, index) => (
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
              <button onClick={()=>deleteFunc(country)}><TiDeleteOutline /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GoneCountry