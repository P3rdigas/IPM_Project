import React, {useState} from "react";
import "./popUPSaveCW.css"

function PopUPSaveCW(props){
    const [isPending, setIsPending] = useState(false);

    const handleSave = (e) => {
        e.preventDefault()
        setIsPending(true)
        const username = sessionStorage.getItem("username")
        const DELIMITER = "___"

        const workout = {
            title: document.getElementById("workout-name").value,
            exercises: props.exercisesForSubmit,
            muscles: props.muscles.toString().replaceAll(',', DELIMITER)
        }

        fetch(`/rest/${username}/workout`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workout)
        }).then(response => {
            setIsPending(false)
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
        props.setTrigger(false)
    }

    return(props.trigger) ? (
        <div className="pop-up-outer-bonds-cw">
            <div className="pop-up-save-cw">
                <h1>Insert Workout's Name</h1>
                <form onSubmit={handleSave}>
                    <input id="workout-name" className="text-box-popup-cw" type="text"  placeholder='e.g. Chest Intense Workout' required/>
                    <div className="conj-confirm-cancel-buttons-cw">
                        <div className="cancel-card-cw" onClick={()=> props.setTrigger(false)}>
                            <span style={{fontSize: 22}}>Cancel</span>
                        </div>
                        <button type="submit" disabled={isPending} className="confirm-card-cw">
                            <span style={{fontSize: 22}}>Confirm</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ):"";
}

export default PopUPSaveCW