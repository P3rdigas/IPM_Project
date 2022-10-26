import React from 'react'
import { Link }  from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'

function IntroNavbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
                <img src="images/Logo_Branco.png" alt="Logo" width={64} height={71}/>  {/* Width = 0.9 * Height */}
                Lifters Journal
            </Link>
            
            <div className='navbar-intro-container'>
              <ul className='navbar-intro-menu'>
                <li>Home</li>
                <li>About Us</li>
                <li>Information</li>
              </ul>
              <div className='hamburger'>
                <FaBars />
              </div>
            </div>
        </div>
      </nav> 
    </>
  )
}

export default IntroNavbar
