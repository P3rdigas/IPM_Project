import React, {useState} from "react";
import "./cardWorkoutCW.css"
import Typography from "@mui/material/Typography";
import { GrCircleInformation } from "react-icons/gr";
import { TfiSave } from "react-icons/tfi";
import PopUPSave from "../../../GeneratedWorkouts/components/PopUPSaveGW/popUPSaveGW";

function CardWorkoutCW(props) {
    const [buttonPopUp,setButtonPopup] = useState(false)
    return(
        <div className='card-workout-cw'>
            <div>
                <Typography gutterBottom variant="h4" component="div">
                    Your Workout
                </Typography>
                <div className="exercises-conj-card-cw">
                    {props.exercises.map((name, i) => (
                        <div className="exercise-card-cw" key={i}>
                            <span style={{fontSize: 24}}>{props.exercises[i].name}</span>
                            <div className="conj-reps-set-card-cw">
                                <div className="reps-card-cw">
                                    <span style={{fontSize: 24}}>{props.exercises[i].reps} reps</span>
                                </div>
                                <div className="reps-card-cw">
                                    <span style={{fontSize: 24}}>{props.exercises[i].sets} sets</span>
                                </div>
                                <GrCircleInformation className="info-icon-cw" onClick={console.log("yauu")}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="save-card-cw" onClick={() => setButtonPopup(true)}>
                <TfiSave size={23}/>
                <span style={{fontSize: 24}}>Save</span>
            </div>
            <PopUPSave trigger={buttonPopUp} setTrigger={setButtonPopup}/>
        </div>
    )
}

export default CardWorkoutCW