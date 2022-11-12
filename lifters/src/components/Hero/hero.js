import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ImagesSlider from '../ImagesSlider/imagesSlider'

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from 'react-icons/fa'
import { FiLogIn } from "react-icons/fi";

import './hero.css'

function Hero() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const images = [
        {url: "images/image-slider-1.jpg", title: "GYM 1"},
        {url: "images/image-slider-2.jpg", title: "GYM 2"},
        {url: "images/image-slider-3.jpg", title: "GYM 3"}
    ];
  
    return (
        <div className='hero'>
            <div className='hero-slide-show'>
                <ImagesSlider slides={images} />
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
                        <span className="login-form-button-text">Log In</span>
                        <FiLogIn className='login-form-button-icon'/>
                    </button>
                </form>

                <Link to="/forgetpwd" className='hero-login-forgetpwd'>Forget Password</Link>

                <Link to="/register" className='hero-login-register'>
                    Don't have an account? Register!
                </Link>
            </div>
        </div>
    )
}

export default Hero