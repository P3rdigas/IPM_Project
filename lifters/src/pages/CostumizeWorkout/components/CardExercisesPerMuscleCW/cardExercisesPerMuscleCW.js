import Typography from "@mui/material/Typography";
import { GrCircleInformation } from "react-icons/gr";
import "./cardExercisesPerMuscleCW.css"
import React from "react";

function CardExercisesPerMuscleCW(props) {
    return(
        <div className='card-exercises-per-muscle-cw'>
            <Typography gutterBottom variant="h4" component="div">
                Exercises
            </Typography>
            <div className="exercises-muscle-conj-card-cw">
                {props.exercises.map((name, i) => (
                    <div className="exercise-muscle-card-cw" key={i}>
                        <span style={{fontSize: 24}}>{props.exercises[i].name}</span>
                        <GrCircleInformation className="info-icon-muscle-cw" onClick={console.log("yauu")}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardExercisesPerMuscleCW