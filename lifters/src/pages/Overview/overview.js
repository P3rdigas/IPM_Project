import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import SavedWorkouts from './components/SavedWorkouts/savedWorkouts'


import './overview.css'

function Overview() {
    return(
        <div id='overview'>
            <Navbar />
            <SavedWorkouts />                                   
        </div>
    )
}

export default Overview
