import { GrCircleInformation } from "react-icons/gr";
import "./cardWorkoutCW.css"
import React from "react";
import {BiXCircle} from "react-icons/bi";

function ExercisesCardRightCW(props) {
    return(
        <div className="exercise-card-cw" key={props.i} id={props.id}>
            <span style={{fontSize: 24}}>{props.name}</span>
            <div className="conj-reps-set-card-cw">
                <input id={`${props.id}sets`} className="reps-card-cw" min="0" type="number" placeholder='Reps' required/>
                <input id={`${props.id}reps`} className="reps-card-cw" min="0" type="number" placeholder='Sets' required/>
                <GrCircleInformation className="info-icon-cw" onClick={console.log("yauu")}/>
                <BiXCircle className="muscle-card-remove-cw" onClick={() => props.handleDelete(props.id)}/>
            </div>
        </div>
    )
}

export default ExercisesCardRightCW