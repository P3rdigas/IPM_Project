import React from 'react'
import './editPopup.css'
import {GrCircleInformation} from "react-icons/gr";
import {AiFillEdit} from 'react-icons/ai'
import {BiXCircle} from "react-icons/bi";
import { Link } from 'react-router-dom'

function EditPopup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='pop'>
                <BiXCircle className = 'popup-close' onClick={() => props.setTrigger(false)} size={40}></BiXCircle>                
                <div className='exercises-cardGeneratedWorkout'>
                    <h1>{props.event.title}</h1>
                    <div className='scroll-popup'>
                        {props.event.exercises.map((name,i) => (
                            <div className="exercise-exercise-card-gw" key={i}>
                                <span style={{fontSize: 24}}>{props.event.exercises[i].name}</span>
                                <div className="overview-conj-reps-set-card-gw">
                                    <div className="overview-reps-card-gw">
                                        <span text-align= 'center' style={{fontSize: 24}}>{props.event.exercises[i].sets} sets</span>
                                    </div>
                                    <div className="overview-reps-card-gw">
                                        <span style={{fontSize: 24}}>{props.event.exercises[i].reps} reps</span>
                                    </div>
                                    <GrCircleInformation className="overview-info-icon-gw" size={35} onClick={console.log("yauu")}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    ) : "";
}
export default EditPopup