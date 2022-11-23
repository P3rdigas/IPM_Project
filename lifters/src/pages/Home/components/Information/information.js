import React from 'react'

import Logo from '../../../../images/Logo.png'

import './information.css'

function Information() {
    return(
        <div className='information' id='information'>
            <div className='information-container'>
                <img src={Logo} alt='Logo'/>
                <div className='information-text'>
                    <h2>Information</h2>
                    <span className='home-line'></span>
                    <p>
                        Nowadays, there are a lot of disinformation in the fitness industry. When new people
                        come to the sport, they don’t have a good plan to start. Our application provides a
                        platform that has all this information together and for hardcore lifters there are tools to
                        help them to develop their training.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Information