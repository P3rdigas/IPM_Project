import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'

import './home.css'

function Home() {
    return(
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Hero />} />
            </Routes>
        </div>
    )
}

export default Home
