import React from 'react'
import { Route } from 'react-router-dom'

import LoginBox from './components/LoginBox/loginBox'

import './loginPage.css'

function LoginPage() {
    return(
        <div>
            <Route exact path="/" element={<LoginBox />}/>
        </div>
    )
}

export default LoginPage
