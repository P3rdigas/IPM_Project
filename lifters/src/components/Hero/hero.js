import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordFill } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import './hero.css'

function Hero() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  
    return (
        <div className='hero'>
            <div className='hero-slide-show'>
                <img src='images/download.jpg' alt='slide-show' width={750} height={400}></img>
            </div>

            <div className='hero-login'>
                <form className='hero-login-form'>
                    <div className='login-form-field'>
                        <FaUserAlt className='login-form-icon'/>
                        <input type="text" className="login-form-input" placeholder='Username' required />
                    </div>                    
                    
                    <div className='login-form-field'>
                        <RiLockPasswordFill className='login-form-icon'/>
                        <input type={click ? "text" : "password"} className="login-form-input" placeholder='Password' required />
                        <div className='login-form-password-icon' onClick={handleClick}>
                            {click ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </div>
                    </div>
                    
                    <button className='login-form-button'>
                        <span class="login-form-button-text">Log In</span>
                        <FiLogIn className='login-form-button-icon'/>
                    </button>
                </form>

                <Link to="/" className='hero-login-forgetpwd'>Forget Password</Link>

                <div className='hero-login-register'>
                    Don't have an account?
                    <Link to="/">Click here</Link> to register!
                </div>
            </div>
        </div>
    )
}

export default Hero