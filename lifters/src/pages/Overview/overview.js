import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import SavedWorkouts from './components/SavedWorkouts/savedWorkouts'
import InjuriesOverview from './components/InjuriesOverview/injuriesOverview'

import './overview.css'

function Overview() {

    return(
        <div className='overview' id='overview'>
            <Navbar />
            <div className='overview-elements'>
            
                <div className='overview-left-column'>
                    <SavedWorkouts />
                    
                </div>

                <div className='overview-right-column'>
                <InjuriesOverview />
                </div>  
            </div>                 
        </div>
    )
}

export default Overview
