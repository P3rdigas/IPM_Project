import React, { useState } from 'react'
import Navbar from '../../components/Navbar/navbar'
import SavedWorkouts from './components/SavedWorkouts/savedWorkouts'
import InjuriesOverview from './components/InjuriesOverview/injuriesOverview'

import './overview.css'

function Overview() {
    const [workouts, setWorkouts] = useState([])
    const username = sessionStorage.getItem("username")

    fetch(`/rest/${username}/workouts`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
    }).then(response => {
        if(response.ok) {
            return response.json()
        } else {
            return response.text().then(text => { 
                alert(text)
                throw new Error(text) 
            })
        }
    }).then(data => {
        setWorkouts(data)
    })

    return(
        <div className='overview' id='overview'>
            <Navbar />
            <div className='overview-elements'>
            
                <div className='overview-left-column'>
                    <SavedWorkouts workouts={workouts}/>
                    
                </div>

                <div className='overview-right-column'>
                <InjuriesOverview />
                </div>  
            </div>                 
        </div>
    )
}

export default Overview
