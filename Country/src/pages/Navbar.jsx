import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar1'>
        <Link to="/ToGoCountry">To Go Country List</Link>
        <Link to="/">Ana Sayfaya Dön</Link>
        <Link to="/GoneCountry">Gone Country List</Link>
    </div>
  )
}

export default Navbar