import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { Paper,RadioGroup, FormControlLabel, Radio } from '@mui/material/';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt,FaWeight,FaEnvelope,FaRulerVertical,FaHourglassHalf } from 'react-icons/fa'
import { FiLogIn } from "react-icons/fi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { MdAccountCircle } from 'react-icons/md'
import { AiFillIdcard } from "react-icons/ai";
import {Typography} from "@mui/material";
import './register.css'

function RegisterPage() {
    const [click, setClick] = useState(false);
    const [gender, setGender] = useState("male");
    const handleClick = () => setClick(!click);

    const handleGender = e => {
        setGender(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            gender: gender,
            age: document.getElementById("age").value,
            height: document.getElementById("height").value,
            weight: document.getElementById("weight").value,
            fileURL: "Algoooooooo por agora"
        }

        fetch('/rest/register', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then((response) => {
            console.log(response)
        })
    }

    return(
        <div className='register'>
            <div className='content-register'>
                <Link to="/" className='register-back-link'>
                    <BsFillArrowLeftCircleFill className='register-back-icon'/>
                </Link>
                <Paper elevation={10} className="paper-style-register">
                    <form className='register-form' onSubmit={handleSubmit}>
                        <div className='register-box-elements'>
                            <div className='register-left-colum'>
                                <div className='register-form-field'>
                                    <FaUserAlt className='register-form-icon'/>
                                    <input type="text" id='username' className="register-form-input" placeholder='Username' required />
                                </div>
                                <div className='register-form-field'>
                                    <RiLockPasswordFill className='register-form-icon'/>
                                    <input type={click ? "text" : "password"} id='password' className="register-form-input" placeholder='Password' required />
                                    <div className='register-form-password-icon' onClick={handleClick}>
                                        {click ? <AiFillEye /> : <AiFillEyeInvisible />}
                                    </div>
                                </div>
                                <div className='register-form-field'>
                                    <RiLockPasswordFill className='register-form-icon'/>
                                    <input type={click ? "text" : "password"} id='confirmPWD' className="register-form-input" placeholder='Confirm Password' required />
                                    <div className='register-form-password-icon' onClick={handleClick}>
                                        {click ? <AiFillEye /> : <AiFillEyeInvisible />}
                                    </div>
                                </div>
                                <div className='register-form-field'>
                                    <AiFillIdcard className='register-form-icon'/>
                                    <input type="text" id='name' className="register-form-input" placeholder='Name' required />
                                </div>
                                <div className='register-form-field'>
                                    <FaEnvelope className='register-form-icon'/>
                                    <input type="text" id='email' className="register-form-input" placeholder='Email' required />
                                </div>
                            </div>
                            <div className='register-right-colum'>
                                <MdAccountCircle className='profile-photo-circle'/>
                                <div className='register-form-field'>
                                    <label  className='gender-title-register'>Gender</label>
                                    <RadioGroup id='gender' onChange={handleGender} aria-labelledby="demo-controlled-radio-buttons-group" row  defaultValue="male" >
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
                                    <input type="number" id='age' className="register-form-input" placeholder='Age' required />
                                </div>
                                <div className='register-form-field'>
                                    <FaRulerVertical className='register-form-icon'/>
                                    <input type="number" id='height' className="register-form-input" placeholder='Height (cm)' required />
                                </div>
                                <div className='register-form-field'>
                                    <FaWeight className='register-form-icon'/>
                                    <input type="number" id='weight' className="register-form-input" placeholder='Weight (kg)' required />
                                </div>
                            </div>
                        </div>
                        <button type='submit' className='register-form-button'>
                            <span className="register-form-button-text">Submit</span>
                            <FiLogIn className='register-form-button-icon'/>
                        </button>
                    </form>
                </Paper>
            </div>
        </div>
    )
}

export default RegisterPage
