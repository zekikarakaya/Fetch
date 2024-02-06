import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar1'>
        <Link to="/Gidilecekler">Gidilecekler</Link>
        <Link to="/">Anasayfaya Geri Dön</Link>
        <Link to="/Gidilmişler">Gidilmişler</Link>
    </div>
  )
}

export default Navbar