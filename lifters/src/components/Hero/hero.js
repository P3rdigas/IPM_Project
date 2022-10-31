import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'

function Hero() {
  
    return (
        <div className='hero'>
            <div className='hero-slide-show'>
                <img src='images/download.jpg' alt='slide-show' width={750} height={400}></img>
            </div>

            <div className='hero-login'>
                <form className='hero-login-form'>
                    <label>Username</label>
                    <input type="text" className="uname" placeholder='Enter your username' required />

                    <label>Password</label>
                    <input type="password" className="pwd" placeholder='Enter your password' required />

                    <button>Log In</button>
                </form>

                <div className='hero-login-forgetpwd'>
                    <Link to="/">Forget Password</Link>
                </div>

                <div className='hero-login-register'>
                    Don't have an account?
                    <Link to="/">Click here</Link> to register!
                </div>
            </div>
        </div>
    )
}

export default Hero