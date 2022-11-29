import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/navbar'
import SavedWorkouts from './components/SavedWorkouts/savedWorkouts'

import './overview.css'

function Overview() {
    const [workouts, setWorkouts] = useState([])
    const username = sessionStorage.getItem("username")

    useEffect(() => {
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
            let workouts = []
            for(let i = 0; i < data.length; i++) {
                let workout = data[i].properties;
                workouts.push( { id: data[i].key.path[0].id.toString(), title: workout.workout_title.value, tags: workout.workout_muscles.value, exercises: workout.workout_exercises.value} )
            }
            setWorkouts(workouts)
        })
    }, [])

    const handleDeleteCardsSW = (id) => {
        fetch(`/rest/${username}/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        }).then(response => {
            if(response.ok) {
                setWorkouts(workouts => workouts.filter((item, i) => item.id !== id))
            } else {
                return response.text().then(text => {
                    alert(text)
                    throw new Error(text)
                })
            }
        })
    }

    return(
        <div className='overview' id='overview'>
            <Navbar />
            <div className='overview-elements'>
                <div className='overview-left-column'>
                    <SavedWorkouts workouts={workouts} handleDeleteCardsSW={handleDeleteCardsSW}/>
                </div>
            </div>                 
        </div>
    )
}

export default Overview
