import React, {useState} from "react";
import "./cardGeneratedWorkout.css"
import Typography from "@mui/material/Typography";
import { GrCircleInformation } from "react-icons/gr";
import { TfiReload,TfiSave } from "react-icons/tfi";
import PopUPSave from "../PopUPSaveGW/popUPSaveGW";

function CardGeneratedWorkout(props) {
    const [buttonPopUp,setButtonPopup] = useState(false)
    return(
        <div className='cardGeneratedWorkout'>
            <div>
                <Typography gutterBottom variant="h4" component="div">
                    Generated Workout
                </Typography>
                {props.exercises.map((name,i) => (
                    <div className="exercise-card-gw" key={i}>
                        <span style={{fontSize: 24}}>{props.exercises[i].name}</span>
                        <div className="conj-reps-set-card-gw">
                            <div className="reps-card-gw">
                                <span style={{fontSize: 24}}>{props.exercises[i].reps} reps</span>
                            </div>
                            <div className="reps-card-gw">
                                <span style={{fontSize: 24}}>{props.exercises[i].sets} sets</span>
                            </div>
                            <GrCircleInformation className="info-icon-gw" size={23} onClick={console.log("yauu")}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="conj-save-reload-buttons">
                <div className="reload-card-gw">
                    <TfiReload size={23}/>
                    <span style={{fontSize: 24}}>Reload</span>
                </div>
                <div className="save-card-gw" onClick={()=> setButtonPopup(true)}>
                    <TfiSave size={23}/>
                    <span style={{fontSize: 24}}>Save</span>
                </div>
            </div>
            <PopUPSave trigger={buttonPopUp} setTrigger={setButtonPopup}/>
        </div>
    )
}

export default CardGeneratedWorkout