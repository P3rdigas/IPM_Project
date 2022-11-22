import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../../images/Logo_Branco.png'

import { FaBars, FaTimes } from 'react-icons/fa'

import './navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='header'>
      <nav className='navbar'>
        <Link to="/" className='navbar-logo'>
            <img src={Logo} alt="Logo" width={64} height={71}/>  {/* Width = 0.9 * Height */}
            Lifters Journal
        </Link>   
  
        <div className='icons-menu' onClick={handleClick}>
          {click ? <FaTimes size={30} style={{color: '#ffffff'}}/> 
                  : <FaBars size={30} style={{color: '#ffffff'}}/>}
        </div>   
          
        <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
          <li className='navbar-menu-item'>
            <Link to="/" className='navbar-menu-item-link'>Home</Link>
          </li>    
          <li className='navbar-menu-item'>
            <Link to="#about" className='navbar-menu-item-link'>About Us</Link>
          </li>
          <li className='navbar-menu-item'>
            <Link to="#information" className='navbar-menu-item-link'>Information</Link>
          </li>
          <li className='navbar-menu-login-item'>
            <Link to="/login" className='navbar-menu-login-item-text'>Login</Link>
          </li>
        </ul>
     </nav>
    </div>
  )
}

export default Navbar
