import React from 'react'

const City = ({city}) => {
    if (!city) {
        return <div>No data available</div>;
      }
  return (
    <div>
    <h2>{city.name}, {city.sys.country}</h2>
    <p>Temperature: {city.main.temp} °C</p>
    <p>Weather: {city.weather[0].description}</p>
    
  </div>
  )
}

export default City