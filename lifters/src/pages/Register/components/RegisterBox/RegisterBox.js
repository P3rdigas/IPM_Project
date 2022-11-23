import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import {TextField, Button, Grid, Paper, InputAdornment,RadioGroup,FormControlLabel,FormControl,FormLabel,Radio} from '@mui/material/';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt,FaWeight,FaEnvelope,FaRulerVertical,FaHourglassHalf } from 'react-icons/fa'
import { FiLogIn } from "react-icons/fi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { MdAccountCircle } from 'react-icons/md'
import { AiFillIdcard } from "react-icons/ai";
import './RegisterBox.css'
import {Typography} from "@mui/material";

function RegisterBox() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className='register'>
            <div className='content-register'>
                <Link to="/" className='register-back-link'>
                    <BsFillArrowLeftCircleFill className='register-back-icon'/>
                </Link>
                <Paper elevation={10} className="paper-style-register">
                    <form className='register-form'>
                        <div className='register-box-elements'>
                            <div className='register-left-colum'>
                                <div className='register-form-field'>
                                    <FaUserAlt className='register-form-icon'/>
                                    <input type="text" className="register-form-input" placeholder='Username' required />
                                </div>
                                <div className='register-form-field'>
                                    <RiLockPasswordFill className='register-form-icon'/>
                                    <input type={click ? "text" : "password"} className="register-form-input" placeholder='Password' required />
                                    <div className='register-form-password-icon' onClick={handleClick}>
                                        {click ? <AiFillEye /> : <AiFillEyeInvisible />}
                                    </div>
                                </div>
                                <div className='register-form-field'>
                                    <RiLockPasswordFill className='register-form-icon'/>
                                    <input type={click ? "text" : "password"} className="register-form-input" placeholder='Confirm Password' required />
                                    <div className='register-form-password-icon' onClick={handleClick}>
                                        {click ? <AiFillEye /> : <AiFillEyeInvisible />}
                                    </div>
                                </div>
                                <div className='register-form-field'>
                                    <AiFillIdcard className='register-form-icon'/>
                                    <input type="text" className="register-form-input" placeholder='Name' required />
                                </div>
                                <div className='register-form-field'>
                                    <FaEnvelope className='register-form-icon'/>
                                    <input type="text" className="register-form-input" placeholder='Email' required />
                                </div>
                            </div>
                            <div className='register-right-colum'>
                                <MdAccountCircle className='profile-photo-circle'/>
                                <div className='register-form-field'>
                                    <label  className='gender-title-register'>Gender</label>
                                    <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" row  defaultValue="male" >
                                        <FormControlLabel className="gender-option-register" value="male"
                                                          label={<Typography style={{fontFamily: "Lucida Console"}}>Male</Typography>}
                                                          control={<Radio color="success" size="small"/>}/>
                                        <FormControlLabel className="gender-option-register"  value="female"
                                                          label={<Typography style={{fontFamily: "Lucida Console"}}>Female</Typography>}
                                                          control={<Radio color="success" size="small"/>}/>
                                    </RadioGroup>
                                </div>
                                <div className='register-form-field'>
                                    <FaHourglassHalf className='register-form-icon'/>
                                    <input type="number" className="register-form-input" placeholder='Age' required />
                                </div>
                                <div className='register-form-field'>
                                    <FaRulerVertical className='register-form-icon'/>
                                    <input type="number" className="register-form-input" placeholder='Height (cm)' required />
                                </div>
                                <div className='register-form-field'>
                                    <FaWeight className='register-form-icon'/>
                                    <input type="number" className="register-form-input" placeholder='Weight (kg)' required />
                                </div>
                            </div>
                        </div>
                        <button className='register-form-button'>
                            <span className="register-form-button-text">Submit</span>
                            <FiLogIn className='register-form-button-icon'/>
                        </button>
                    </form>
                </Paper>
            </div>
        </div>
    );
}

export default RegisterBox