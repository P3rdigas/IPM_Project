
import { GrCircleInformation } from "react-icons/gr";
import "./cardExercisesPerMuscleCW.css"
import React from "react";

function ExercisesCardLeftCW(props) {
    const dragStarted=(e,exercise) =>{
        e.dataTransfer.setData("exerciseName",props.name)
    }
    return(
        <div draggable onDragStart={(e) =>dragStarted(e,props.exercise)}  className="exercise-muscle-card-cw">
            <span style={{fontSize: 24}}>{props.name}</span>
            <GrCircleInformation className="info-icon-muscle-cw" onClick={console.log("yauu")}/>
        </div>
    )
}

export default ExercisesCardLeftCW