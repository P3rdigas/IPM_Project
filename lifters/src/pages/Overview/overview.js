import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import SavedWorkouts from './components/SavedWorkouts/savedWorkouts'
import InjuriesOverview from './components/InjuriesOverview/injuriesOverview'


import './overview.css'

function Overview() {
    return(
        <div id='overview'>
            <SavedWorkouts />
            <Navbar />
            <div className='overview-injuries'> 
                <InjuriesOverview />
            </div>                   
        </div>
    )
}

export default Overview
