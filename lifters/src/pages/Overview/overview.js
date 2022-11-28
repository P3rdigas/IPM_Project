import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/navbar'
import SavedWorkouts from './components/SavedWorkouts/savedWorkouts'

import './overview.css'
const GENERATED_WORKOUT = [
    {name: 'Bicep Curl', reps: "12", sets:"3"},
    {name: 'Rows', reps: "8", sets:"12"},
    {name: 'Bicep Curl', reps: "12", sets:"3"},
    {name: 'Rows', reps: "8", sets:"12"},
    {name: 'Bicep Curl', reps: "12", sets:"3"},
    {name: 'Rows', reps: "8", sets:"12"},
    {name: 'Bicep Curl', reps: "12", sets:"3"},
    {name: 'Rows', reps: "8", sets:"12"},


];
let INITIAL_CARDS = [
    { id: "1", title: '1Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg', exercises:GENERATED_WORKOUT},
    { id: "2", title: '2Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg', exercises:GENERATED_WORKOUT},
    { id: "3", title: '3Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg', exercises:GENERATED_WORKOUT},
    { id: "4", title: '4Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg', exercises:GENERATED_WORKOUT},
    { id: "5", title: '5Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg', exercises:GENERATED_WORKOUT},
    { id: "6", title: '6Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg', exercises:GENERATED_WORKOUT},
    { id: "7", title: '7Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg', exercises:GENERATED_WORKOUT},
    { id: "8", title: '8Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg', exercises:GENERATED_WORKOUT},
];

function Overview() {
    const [workouts, setWorkouts] = useState(INITIAL_CARDS)
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

    const handleDelete = (id) => {
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
                    <SavedWorkouts workouts={workouts} handleDelete={handleDelete}/>
                </div>
            </div>                 
        </div>
    )
}

export default Overview
