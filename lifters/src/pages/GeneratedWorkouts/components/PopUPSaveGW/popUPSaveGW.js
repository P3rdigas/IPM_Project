import React, { useState } from "react";
import "./popUPSaveGW.css"

function PopUpSave(props) {
    const handleSave = () => {
        const username = sessionStorage.getItem("username")
        const size = props.exercises.length
        const DELIMITER = "___"

        let exercises = ""

        for(let i = 0; i < size; i++) {
            let exercise = props.exercises[i].properties.exercise_name.value.toString() + DELIMITER + props.reps[i].toString() + DELIMITER + props.sets[i].toString()
            
            if(exercises === "")
                exercises = exercise
            else
                exercises = exercises.concat(DELIMITER, exercise)
        }

        const workout = {
            title: document.getElementById("title").value,
            exercises: exercises,
            muscles: props.muscles.toString().replaceAll(',', DELIMITER)
        }

        fetch(`/rest/${username}/workout`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workout)
        }).then(response => {
            if(response.ok) {
                alert("Workout added successfully")
                props.setTrigger(false)
            } else {
                return response.text().then(text => { 
                    alert(text)
                    throw new Error(text) 
                })
            }
        })
    }

    return(props.trigger) ? (
        <div className="pop-up-outer-bonds-gw">
            <div className="pop-up-save-gw">
                <h1>Insert Workout's Name</h1>
                <input id="title" className="text-box-popup-gw" type="text"  placeholder='e.g. Chest Intense Workout'/>
                <div className="conj-confirm-cancel-buttons-gw">
                    <div className="cancel-card-gw" onClick={()=> props.setTrigger(false)}>
                        <span style={{fontSize: 22}}>Cancel</span>
                    </div>
                    <div className="confirm-card-gw" onClick={() => handleSave()}>
                        <span style={{fontSize: 22}}>Confirm</span>
                    </div>
                </div>
            </div>
        </div>
    ):"";
}

export default PopUpSave