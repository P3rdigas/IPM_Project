import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../Home/components/Navbar/navbar'
import LoginBox from './components/LoginBox/loginBox'

import './loginPage.css'

function LoginPage() {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<LoginBox />}/>
            </Routes>
        </div>
    )
}

export default LoginPage
