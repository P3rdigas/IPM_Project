import React from 'react'
import { Link}  from 'react-router-dom'
import './IntroNavbar.css'

function IntroNavbar() {
  return (
    <>
      <nav className='introNavbar'>
        <div className='introNavbar-container'>
            <Link to="/" className="introNavbar-logo">
                Lifters Journal <img src="Images/Logo_Branco.png" alt="Logo" width={64} height={71}/>  {/* Width = 0.9 * Height */}
            </Link>
        </div>
      </nav> 
    </>
  )
}

export default IntroNavbar
