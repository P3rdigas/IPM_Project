import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RegisterBox from './components/RegisterBox/RegisterBox'
import './register.css'

function RegisterPage() {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<RegisterBox />}/>
            </Routes>
        </div>
    )
}

export default RegisterPage
