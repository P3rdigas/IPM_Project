import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Grid, Paper } from '@mui/material/';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from 'react-icons/fa'
import { FiLogIn } from "react-icons/fi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import { MdAccountCircle } from 'react-icons/md'

import './loginPage.css'

function LoginPage() {
    const paperStyle={padding:30, height:430, width:350}
    const [click, setClick] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => setClick(!click);

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsPending(true)

        const user = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
        }

        fetch('/rest/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(response => {
            setIsPending(false)
            if(response.status === 200)
                navigate('/overview');
            else
                console.log(response.body)
        })
    }

  return (
    <div className='loginp'>               
        <div className='content-login'>
            <Link to="/" className='login-back-link'>
                    <BsFillArrowLeftCircleFill className='login-back-icon'/>
            </Link> 
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <div className='box-elements'>
                        <MdAccountCircle size={50} style={{color: '#aaaaaa'}}/>
                        <form className='login-form' onSubmit={handleSubmit}>
                            <div className='login-form-field'>
                                <FaUserAlt className='login-form-icon'/>
                                <input type="text" id='username' className="login-form-input" placeholder='Username' required />
                            </div>                    
                    
                            <div className='login-form-field'>
                                <RiLockPasswordFill className='login-form-icon'/>
                                <input type={click ? "text" : "password"} id='password' className="login-form-input" placeholder='Password' required />
                                <div className='login-form-password-icon' onClick={handleClick}>
                                    {click ? <AiFillEye /> : <AiFillEyeInvisible />}
                                </div>
                            </div>
                            <button type='submit' disabled={isPending} className='login-form-button'>
                                <span className="login-form-button-text">{isPending ? "Submiting..." : "Log In"}</span>
                                <FiLogIn className='login-form-button-icon'/>
                            </button>
                            <div className='login-to-register'>
                                <Link to="/signup" className='login-register'>
                                    Don't have an account? Register!
                                </Link>
                            </div>                
                        </form>
                    </div>
                </Paper>
            </Grid>                    
        </div>
    </div>
  );
}

export default LoginPage
