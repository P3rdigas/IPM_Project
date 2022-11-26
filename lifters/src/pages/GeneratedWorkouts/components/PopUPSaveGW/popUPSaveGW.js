import React from "react";
import "./popUPSaveGW.css"

function PopUPSave(props){
    return(props.trigger) ? (
        <div className="pop-up-outer-bonds-gw">
            <div className="pop-up-save-gw">
                <h1>Insert Workout's Name</h1>
                <input className="text-box-popup-gw" type="text"  placeholder='e.g. Chest Intense Workout'/>
                <div className="conj-confirm-cancel-buttons-gw">
                    <div className="cancel-card-gw" onClick={()=> props.setTrigger(false)}>
                        <span style={{fontSize: 22}}>Cancel</span>
                    </div>
                    <div className="confirm-card-gw">
                        <span style={{fontSize: 22}}>Confirm</span>
                    </div>
                </div>
            </div>
        </div>
    ):"";
}

export default PopUPSave