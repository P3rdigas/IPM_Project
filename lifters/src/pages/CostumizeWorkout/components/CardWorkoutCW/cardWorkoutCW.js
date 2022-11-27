import React, {useState} from "react";
import "./cardWorkoutCW.css"
import Typography from "@mui/material/Typography";
import { TfiSave } from "react-icons/tfi";
import ExercisesCardRightCW from "./exerciseCardRightCW";
import PopUPSaveCW from "../PopUPSaveCW/popUPSaveCW";

function CardWorkoutCW(props) {
    const [buttonPopUp,setButtonPopup] = useState(false)

    const draggingOver=(e)=>{
        e.preventDefault()
        const offsetClient = e.clientY;
        let idPos = 0
        if (props.cards.length !== 0) {
            for (let i = 0; i < props.cards.length; i++) {
                if (props.cards[i].name !== "vazio") {
                    const offsetcard = document.getElementById(i).getBoundingClientRect().y;
                    if (offsetClient > offsetcard) {
                        idPos++
                    }
                }
            }
            if (idPos === props.cards.length){
                let removeEmply = props.cards.filter((item) => item.name !== "vazio")
                removeEmply.splice(idPos, 0, {name: "vazio"})
                props.setCards([...removeEmply])
            }
            if (props.cards[idPos].name !== "vazio"){
                let removeEmply = props.cards.filter((item) => item.name !== "vazio")
                removeEmply.splice(idPos, 0, {name: "vazio"})
                props.setCards([...removeEmply])
            }
            console.log(props.cards)
        }
    }
    const dragDrop=(e)=>{
        let exerciseName = e.dataTransfer.getData("exerciseName")
        let card={name:exerciseName, reps:"10", sets:"3"}

        if (props.cards.length === 0){
            props.setCards([card])
        }
        else {
            let preCardsList = []
            for (let i = 0; i < props.cards.length; i++) {
                if (props.cards[i].name === "vazio") {
                    preCardsList.push(card)
                }
                else{
                    preCardsList.push(props.cards[i])
                }
            }
            props.setCards([...preCardsList])
        }
    }

    const handleDelete = (idParam) => {
        props.setCards(props.cards.filter((item,id) => id !== idParam));
    }

    return(
        <div className='card-workout-cw'>
            <div>
                <Typography gutterBottom variant="h4" component="div">
                    Your Workout
                </Typography>
                <div onDragOver={(e)=> draggingOver(e)} onDrop={(eDrop)=>dragDrop(eDrop)} className="exercises-conj-card-cw">
                    {props.cards.map((card, i) => (
                        props.cards[i].name !== "vazio"?
                        <ExercisesCardRightCW id={i} name={card.name} reps={card.reps} sets={card.sets} key={i} handleDelete={handleDelete}/>
                        :
                        <div className="exercise-empty-for-drag-card-cw" ></div>
                    ))}
                </div>
            </div>
            <div className="save-card-cw" onClick={() => setButtonPopup(true)}>
                <TfiSave size={23}/>
                <span style={{fontSize: 24}}>Save</span>
            </div>
            <PopUPSaveCW trigger={buttonPopUp} setTrigger={setButtonPopup}/>
        </div>
    )
}

export default CardWorkoutCW