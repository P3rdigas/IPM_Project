import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../images/Logo_Branco.png'

import { FaBars, FaTimes } from 'react-icons/fa'

import './navbar.css'
import {CgProfile} from "react-icons/cg";
import {MdEditCalendar} from "react-icons/md";
import {GiHealthDecrease} from "react-icons/gi";
import {FiLogOut} from "react-icons/fi";
import format from "date-fns/format";

function Navbar() {
  const [click, setClick] = useState(false);
  const [buttonPopUp, setButtonPopup] = useState(false)
  const handleClick = () => setClick(!click);

  function logOut(){
      sessionStorage.clear()
  }
    useEffect (() => {
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClick, true)
    })

    const hideOnEscape = (e) => {
        if(e.key === "Escape") {
            setButtonPopup(false)
        }
    }

    const refOne = useRef(null)

    const hideOnClick = (e) => {
        if(refOne.current && !refOne.current.contains(e.target)) {
            setButtonPopup(false)
        }
    }

  return (
    <div className='navbar'>
      <Link to="/overview" className='navbar-logo'>
          <img src={Logo} alt="Logo" width={45} height={50}/>  {/* Width = 0.9 * Height */}
          Lifters Journal
      </Link>   

      <div className='icons-menu' onClick={handleClick}>
        {click ? <FaTimes size={30} style={{color: '#ffffff'}}/> 
                : <FaBars size={30} style={{color: '#ffffff'}}/>}
      </div>   
        
      <div className={click ? 'navbar-menu active' : 'navbar-menu'}>
        <div className='navbar-menu-item'>
          <Link to="/overview" className='navbar-menu-item-link'>Home</Link>
        </div>
        <div className='navbar-menu-item'>
          <Link to="/find_gyms" className='navbar-menu-item-link'>Find Gyms</Link>
        </div>
        <div className='navbar-menu-item'>
          <Link to="/generate_workout" className='navbar-menu-item-link'>Generate Workout</Link>
        </div>
        <div className='navbar-menu-item'>
          <Link to="/customize_workout" className='navbar-menu-item-link'>Costumize Workout</Link>
        </div>
        <div className='navbar-menu-item' onClick={() => setButtonPopup(true)}>
            <CgProfile className="profile-icon-navbar"/>
        </div>
      </div>
        <div className="pop-up-navbar">{
            (buttonPopUp) ? (
                <div ref={refOne} className="pop-up-navbar-active">
                    <div className="pop-up-element-navbar">
                        <MdEditCalendar className="icon-element-bar"/>
                        <Link to="/register_workout" className='pop-up-navbar-menu-item-link'>Schedule Workouts</Link>
                    </div>
                    <div className="pop-up-element-navbar">
                        <GiHealthDecrease className="icon-element-bar"/>
                        <Link to="/injuries" className='pop-up-navbar-menu-item-link'>Register Injuries</Link>
                    </div>
                    <div className="pop-up-element-navbar" onClick={() => logOut()}>
                        <FiLogOut className="icon-element-bar"/>
                        <Link to="/" className='pop-up-navbar-menu-item-link'>Log Out</Link>
                    </div>
                </div>
            ):""}
        </div>
   </div>
  )
}

export default Navbar
