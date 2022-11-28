import React from 'react'
import Navbar from '../../components/Navbar/navbar';
import Calendar from './Calendar/calendar';
import './registerWorkoutPage.css'


function RegisterWorkoutPage() {
    return (
        <div>
            <Navbar />
            <div className='div-calendar'>
                <Calendar />
            </div>
        </div>
    );

}

export default RegisterWorkoutPage