import React from 'react'
import './editPopup.css'
import {GrCircleInformation} from "react-icons/gr";
import {AiFillEdit} from 'react-icons/ai'
import {BiXCircle} from "react-icons/bi";
import { Link } from 'react-router-dom'



function EditPopup(props) {

    function saveAndExit()  {
        props.setTrigger(false)
    }

    return (props.trigger) ? (
        <div className='popup'>
            <div className='pop'>
                <BiXCircle className = 'popup-close' onClick={() => props.setTrigger(false)} size={40}></BiXCircle>                
                <div className='exercises-cardGeneratedWorkout'>
                    <h1>{props.event.title}</h1>
                    <div className='scroll-popup'>
                        {props.event.exercises.map((name,i) => (
                            <div className="exercise-exercise-card-gw" key={i}>
                                <GrCircleInformation className="exercises-info-icon-gw" size={35}/>
                                <span style={{fontSize: 24}}>{props.event.exercises[i].name}</span>
                                {props.event.exercises[i].kgPerSet.map((set, j) => (
                                    <div className="exercise-conj-reps-set-card-gw">
                                        <div>
                                            <span text-align= 'center' style={{fontSize: 24}}>{j+1}º sets</span>
                                        </div>
                                        <div className='kg-rep-card'>    
                                            <div className="exercise-kgs-card-gw">
                                            <input className="kgs-card-cw" min="0" type="number" placeholder='Kgs' required/>
                                            </div>
                                            <div className="overview-reps-card-gw-register">
                                                <span style={{fontSize: 18}}>{props.event.exercises[i].reps} reps</span>
                                            </div>
                                                
                                            </div>
                                            
                                        </div>
                                ))}
                            <div className="add-set-card-calendar">
                                <span style={{fontSize: 24}}>Add Set</span>
                            </div>    
                            </div>
                        ))}
                    </div>
                    <div className="confirm-card-calendar">
                            <span style={{fontSize: 24}} onClick={() => saveAndExit()}>Confirm</span>
                    </div>
                </div>
            </div>
        </div>

    ) : "";
}
export default EditPopup