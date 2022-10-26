import React from 'react'
import { Link }  from 'react-router-dom'
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
            
            <div className='navbar-intro'>
              <Link to="/" className='navbar-home'>Home</Link>
              <Link to="/aboutus" className='navbar-about-us'>About Us</Link>
              <Link to="/information" className='navbar-information'>Information</Link>
            </div>
        </div>
      </nav> 
    </>
  )
}

export default IntroNavbar
