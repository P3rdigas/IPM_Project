import React, { useEffect, useState } from 'react'
import './popup.css'
import {GrCircleInformation} from "react-icons/gr";
import {AiFillEdit} from 'react-icons/ai'
import {BiXCircle} from "react-icons/bi";
import { Link } from 'react-router-dom'

function Popup(props) {
    const [exercises, setExercises] = useState([])
    const DELIMITER = "___"

    useEffect(() => {
        const array = props.exercises.split(DELIMITER)
        let newExercises = []

        for(let i = 0; i < array.length; i += 3) {
            newExercises.push( { name: array[i], reps: array[i + 1], sets: array[i + 2] } )
        }

        setExercises(newExercises)
    },[])

    return (props.trigger) ? (
        <div className='popup'>
            <div className='pop'>
                <BiXCircle className = 'popup-close' onClick={() => props.setTrigger(false)} size={40}></BiXCircle>                
                <div className='overview-cardGeneratedWorkout'>
                    <h1>{props.title}</h1>
                    <div>
                        {exercises.map((exercise, i) => (
                            <div className="overview-exercise-card-gw" key={i}>
                                <span style={{fontSize: 24}}>{exercise.name}</span>
                                <div className="overview-conj-reps-set-card-gw">
                                    <div className="overview-reps-card-gw">
                                        <span text-align= 'center' style={{fontSize: 19}}>{exercise.reps} reps</span>
                                    </div>
                                    <div className="overview-reps-card-gw">
                                        <span style={{fontSize: 19}}>{exercise.sets} sets</span>
                                    </div>
                                    <GrCircleInformation className="overview-info-icon-gw" size={35}/>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="overview-conj-save-reload-buttons">
                        <div className="overview-reload-card-gw">
                            <Link to="/customize_workout">
                                <AiFillEdit className="exercise-edit-bt" size={50}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    ) : "";
}
export default Popup