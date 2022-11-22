import React from 'react'

import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import Information from './components/Information/information'
import AboutUs from './components/About Us/aboutus'

import './home.css'

function Home() {
    return(
        <div>
            <Navbar />
            <Hero />
            <Information />
            <AboutUs />
        </div>
    )
}

export default Home
