import React from 'react'
import { Link } from 'react-router-dom'

import nova from '../../../../images/nova_icon.png'
import user1 from '../../../../images/user1.png'
import user2 from '../../../../images/user2.png'
import user3 from '../../../../images/user3.png'

import './aboutus.css'

function AboutUs() {
    return (
        <div className='about' id='about'>
            <div className='about-container'>
                <h2>About Us</h2>
                <span className='home-line'></span>

                <div className='about-container-institution'>
                    <img src={nova} alt='nova-icon'/>
                    <span className='about-container-institution-line'></span>
                    <div>
                        <div className='about-container-institution-text-nova'>
                            <span>We are three students of </span>
                            <a href='https://www.fct.unl.pt/' className='about-container-institution-link'>FCT NOVA</a>
                            <span> and we developed this web application as an </span>
                            <a href='http://ctp.di.fct.unl.pt/miei/ipm/index.html' className='about-container-institution-link'>IPM</a>
                            <span> course project</span>
                        </div>

                        <div className='about-container-institution-text-lifter'>
                            <span>For more info access our site </span>
                            <a href='https://sites.google.com/view/liftersjournal-ipm-g15-p2' className='about-container-institution-link-lifters'>HERE</a>
                        </div>
                    </div>
                </div>

                <div className='about-container-content'>
                    <div className='about-container-content-card'>
                        <img src={user1} alt='user1' width={64} height={71}/>
                        <p><span>Bernardo Reis</span></p>
                        <p>Number: 57802</p>                        
                    </div>
                    <div className='about-container-content-card'>
                        <img src={user2} alt='user1'/>
                        <p><span>Pedro Perdigão</span></p>
                        <p>Number: 58165</p>
                    </div>
                    <div className='about-container-content-card'>
                        <img src={user3} alt='user1'/>
                        <p><span>Pedro Lourenço</span></p>
                        <p>Number: 57577</p>                         
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs