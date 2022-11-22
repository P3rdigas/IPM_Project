import React from 'react'

import { Link } from 'react-router-dom'

import './hero.css'

function Hero() {
    return (
        <div className='hero'>
            <div className='content'>
                <div className='content-title'>Lifters Journal</div>
                <div className='content-text'>Join us and start customizing your workouts like never before!</div>
                <Link to='/signin' className='content-button'>
                    Registe-se
                </Link>
            </div>
        </div>
    )
}

export default Hero