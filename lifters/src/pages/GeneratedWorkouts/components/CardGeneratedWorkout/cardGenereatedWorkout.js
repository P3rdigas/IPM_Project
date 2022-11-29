import React, {useState} from "react";
import "./cardGeneratedWorkout.css"
import Typography from "@mui/material/Typography";
import { GrCircleInformation } from "react-icons/gr";
import { TfiReload,TfiSave } from "react-icons/tfi";
import PopUpSave from "../PopUPSaveGW/popUPSaveGW";
import { BsGearWide } from "react-icons/bs";

function randomNumber(weights, results) {
    var num = Math.random(),
        s = 0,
        lastIndex = weights.length - 1;

    for (var i = 0; i < lastIndex; ++i) {
        s += weights[i];
        if (num < s) {
            return results[i];
        }
    }

    return results[lastIndex].toString();
}

function randomReps() {
    var weights = [0.05, 0.05, 0.15, 0.15, 0.15, 0.15, 0.15, 0.05, 0.05, 0.05];
    var results = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return randomNumber(weights, results)
}

function randomSets() {
    var weights = [0.25, 0.5, 0.25];
    var results = [2, 3, 4];

    return randomNumber(weights, results)
}

function CardGeneratedWorkout(props) {
    const [buttonPopUp, setButtonPopup] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [exercises, setExercises] = useState([])
    const [reps, setReps] = useState([])
    const [sets, setSets] = useState([])

    const handleGenerate = () => {
        const muscles = props.muscles.toString().replaceAll(',', '_')

        if(props.muscles.length > 0) {
            setIsPending(true)

            fetch(`/rest/exercises/workout/${muscles}`, {
                method: 'GET',
                headers: { "Content-Type": "application/json" }
            }).then(response => {
                setIsPending(false)
                if(response.status === 200) {
                    return response.json()
                } else {
                    alert("No exercises found")
                }
            }
            ).then(data => {
                setExercises(data)
                
                let newReps = []
                let newSets = []

                for(let i = 0; i < data.length; i++) {
                    newReps.push(randomReps())
                    newSets.push(randomSets())
                }

                setReps(newReps)
                setSets(newSets)
            })
        } else
            alert("Select the muscles first")
    }

    return(
        <>
        {
            exercises.length > 0 ?
                <div className='cardGeneratedWorkout'>
                    <div>
                        <Typography gutterBottom variant="h4" component="div">
                            Generated Workout
                        </Typography>
                        <div className="exercises-conj-card-gw">
                        {exercises.map((exercise, i) => (
                            <div className="exercise-card-gw" key={i}>
                                <span style={{fontSize: 24}}>{exercise.properties.exercise_name.value}</span>
                                <div className="conj-reps-set-card-gw">
                                    <div className="reps-card-gw">
                                        <span id="reps" style={{fontSize: 18}}>{reps[i] + " reps"}</span>
                                    </div>
                                    <div className="reps-card-gw">
                                        <span id="sets" style={{fontSize: 18}}>{sets[i] + " sets"}</span>
                                    </div>
                                    <GrCircleInformation className="info-icon-gw"/>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="conj-save-reload-buttons">
                        <div className="reload-card-gw" onClick={() => handleGenerate()}>
                            <TfiReload size={23}/>
                            <span style={{fontSize: 24}}>Reload</span>
                        </div>
                        <div className="save-card-gw" onClick={() => setButtonPopup(true)}>
                            <TfiSave size={23}/>
                            <span style={{fontSize: 24}}>Save</span>
                        </div>
                    </div>
                    <PopUpSave trigger={buttonPopUp} setTrigger={setButtonPopup}  exercises={exercises} reps={reps} sets={sets} muscles={props.muscles}/>
                </div>
        :
                <div className='card-generated-workout-without-content' >
                    <div className="generate-button-gw" onClick={() => handleGenerate()} disabled={isPending}>
                        <BsGearWide className="gear-icon-gw"/>
                        <span>Generate Workout</span>
                    </div>
                </div>
        }
        </>
    )
}

export default CardGeneratedWorkout