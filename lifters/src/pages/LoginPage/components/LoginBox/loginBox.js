import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import {TextField, Button, Grid, Paper, InputAdornment } from '@mui/material/';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from 'react-icons/fa'
import { FiLogIn } from "react-icons/fi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import { MdAccountCircle } from 'react-icons/md'

import './loginBox.css'

function LoginBox() {
    const paperStyle={padding:30, height:430, width:350}
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

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
                        <form className='login-form'>
                            <div className='login-form-field'>
                                <FaUserAlt className='login-form-icon'/>
                                <input type="text" className="login-form-input" placeholder='Username' required />
                            </div>                    
                    
                            <div className='login-form-field'>
                                <RiLockPasswordFill className='login-form-icon'/>
                                <input type={click ? "text" : "password"} className="login-form-input" placeholder='Password' required />
                                <div className='login-form-password-icon' onClick={handleClick}>
                                    {click ? <AiFillEye /> : <AiFillEyeInvisible />}
                                </div>
                            </div>
                            <button className='login-form-button'>
                                <span className="login-form-button-text">Log In</span>
                                <FiLogIn className='login-form-button-icon'/>
                            </button>
                            <div className='login-to-register'>
                                <Link to="/register" className='login-register'>
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

export default LoginBox