import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

import Logo from '../../../../images/Logo_Branco.png'

import { FaBars, FaTimes } from 'react-icons/fa'

import './navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false)

  return (
    <div className='header'>
      <nav className='navbar'>
        <LinkScroll to="hero" className='navbar-logo' spy={true} smooth={true} offset={0} duration={500}>
            <img src={Logo} alt="Logo" width={64} height={71}/>  {/* Width = 0.9 * Height */}
            Lifters Journal
        </LinkScroll>   
  
        <div className='icons-menu' onClick={handleClick}>
          {click ? <FaTimes size={30} style={{color: '#ffffff'}}/> 
                  : <FaBars size={30} style={{color: '#ffffff'}}/>}
        </div>   
          
        <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
          <li className='navbar-menu-item'>
            <LinkScroll to="hero" className='navbar-menu-item-link' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</LinkScroll>
          </li>    
          <li className='navbar-menu-item'>
            <LinkScroll to="information" className='navbar-menu-item-link' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Information</LinkScroll>
          </li>
          <li className='navbar-menu-item'>
            <LinkScroll to="about" className='navbar-menu-item-link' spy={true} smooth={true} offset={-25} duration={500} onClick={closeMenu}>About Us</LinkScroll>
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
