import Typography from "@mui/material/Typography";
import "./cardExercisesPerMuscleCW.css"
import React from "react";
import ExercisesCardLeftCW from "./exerciseCardLeftCW";

function CardExercisesPerMuscleCW(props) {
    return(
        <div className='card-exercises-per-muscle-cw'>
            <Typography gutterBottom variant="h4" component="div">
                Exercises
            </Typography>
            <div className="exercises-muscle-conj-card-cw" >
                {props.exercises.map((item, i) => (
                    <ExercisesCardLeftCW name={props.exercises[i].name} exercise={props.exercises[i]} key={i}/>
                ))}
            </div>
        </div>
    )
}

export default CardExercisesPerMuscleCW