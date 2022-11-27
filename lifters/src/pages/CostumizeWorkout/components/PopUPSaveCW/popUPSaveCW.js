import React from "react";
import "./popUPSaveCW.css"

function PopUPSaveCW(props){
    return(props.trigger) ? (
        <div className="pop-up-outer-bonds-cw">
            <div className="pop-up-save-cw">
                <h1>Insert Workout's Name</h1>
                <input className="text-box-popup-cw" type="text"  placeholder='e.g. Chest Intense Workout'/>
                <div className="conj-confirm-cancel-buttons-cw">
                    <div className="cancel-card-cw" onClick={()=> props.setTrigger(false)}>
                        <span style={{fontSize: 22}}>Cancel</span>
                    </div>
                    <div className="confirm-card-cw">
                        <span style={{fontSize: 22}}>Confirm</span>
                    </div>
                </div>
            </div>
        </div>
    ):"";
}

export default PopUPSaveCW