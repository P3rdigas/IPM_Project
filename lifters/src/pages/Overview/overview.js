import React from 'react'
import Navbar from '../../components/Navbar2/navbar2'
import SavedWorkouts from './components/SavedWorkouts/savedWorkouts'


import './overview.css'

function Overview() {
    return(
        <div>
            <Navbar />
            <SavedWorkouts />                                   
        </div>
    )
}

export default Overview
