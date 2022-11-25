import React from 'react'
import './popup.css'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {GrCircleInformation} from "react-icons/gr";
import {AiFillEdit} from 'react-icons/ai'
import {BiXCircle} from "react-icons/bi";
import { Link } from 'react-router-dom'


function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='pop'>
                <BiXCircle className = 'popup-close' onClick={() => props.setTrigger(false)} size={40}></BiXCircle>                
                <div className='overview-cardGeneratedWorkout'>
                    <h1>{props.title}</h1>
                    <div>
                        {props.exercises.map((name,i) => (
                            <div className="overview-exercise-card-gw" key={i}>
                                <span style={{fontSize: 24}}>{props.exercises[i].name}</span>
                                <div className="overview-conj-reps-set-card-gw">
                                    <div className="overview-reps-card-gw">
                                        <span text-align= 'center' style={{fontSize: 24}}>{props.exercises[i].reps} sets</span>
                                    </div>
                                    <div className="overview-reps-card-gw">
                                        <span style={{fontSize: 24}}>{props.exercises[i].reps} reps</span>
                                    </div>
                                    <GrCircleInformation className="overview-info-icon-gw" size={35} onClick={console.log("yauu")}/>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="overview-conj-save-reload-buttons">
                        <div className="overview-reload-card-gw">
                            <Link to="/">
                            <AiFillEdit className="overview-edit-bt" size={50}/>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    ) : "";
}
export default Popup