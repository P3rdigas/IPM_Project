import React, {useState} from "react";
import "./cardWorkoutCW.css"
import Typography from "@mui/material/Typography";
import { TfiSave } from "react-icons/tfi";
import PopUPSave from "../../../GeneratedWorkouts/components/PopUPSaveGW/popUPSaveGW";
import ExercisesCardRightCW from "./exerciseCardRightCW";

function CardWorkoutCW(props) {
    const [buttonPopUp,setButtonPopup] = useState(false)
    const [cards,setCards] = useState([])

    const draggingOver=(e)=>{
        e.preventDefault()
    }
    const dragDrop=(e)=>{
        let exerciseName = e.dataTransfer.getData("exerciseName")
        let card={name:exerciseName, reps:"10", sets:"3"}
        setCards([card,...cards])
    }
    const handleDelete = (name) => {
        setCards(cards.filter((item) => item.name !== name));
    }

    return(
        <div className='card-workout-cw'>
            <div>
                <Typography gutterBottom variant="h4" component="div">
                    Your Workout
                </Typography>
                <div onDragOver={(e)=> draggingOver(e)} onDrop={(e)=>dragDrop(e)} className="exercises-conj-card-cw">
                    {cards.map((name, i) => (
                        <ExercisesCardRightCW name={cards[i].name} reps={cards[i].reps} sets={cards[i].sets} key={i} handleDelete={handleDelete}/>
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