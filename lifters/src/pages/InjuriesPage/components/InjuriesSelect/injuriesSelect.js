import {React, useState} from "react";
import Typography from "@mui/material/Typography";
import Dropdown from "../Dropdown/dropdown";
import {BiXCircle} from "react-icons/bi";
import './injuriesSelect.css'



function InjuriesSelect(props) {

    const dropOptions1 = ['Light', 'Medium', 'Severe']
    const dropOptions2 = ['Days', 'Weeks', 'Months']
    const dropOptions3 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
    const arr = []

    const [selected, setSelected] = useState("Seriousness");
    const [selected2, setSelected2] = useState("Mesure");
    const [selected3, setSelected3] = useState("Number");
    const [newArray, setNewArray] = useState(arr);

    const handleChange = (name, s, n, m, fun) => {
        if(fun === 'add') {
            setNewArray(newArray => [...newArray, {name: name, seriousness:s, number:n, mesure:m}])
        }
        else {
            setNewArray(injury => injury.filter((item, i) => (item.name !== name || item.seriousness !== s || item.number !== n || item.mesure !== m)));
        }
        
    }

    return (
        <div className='injuries-s-main'>
            <Typography gutterBottom variant="h4" component="div">
                Generated Workout
            </Typography>
            <div className='injuries-s-box1'>
                
                    <div className='injuries-s-box1-card'>
                        <div>
                            <span style={{fontSize: 24}}>{props.parts}</span>
                        </div>
                        <div className='injuries-s-dropdown'>
                        <Dropdown optionsR={dropOptions1} selected={selected} setSelected={setSelected} />
                        </div>
                        <div className='injuries-s-dropdown'>
                                <Dropdown optionsR={dropOptions3}  selected={selected3} setSelected={setSelected3} />
                        </div>
                        <div className='injuries-s-dropdown'>
                                <Dropdown optionsR={dropOptions2}  selected={selected2} setSelected={setSelected2} />    
                        </div>
                    </div>
                
            </div>
            <div className='injuries-s-button' onClick={()=> handleChange(props.parts, selected, selected3, selected2, 'add')}>
                    <span style={{fontSize: 24}}>Confirm</span>
            </div>
            <div className='injuries-s-box2'>
                <div className='injuries-s-box2-title'>
                    <h2>Injuries:</h2>
                </div>
                {newArray.map((name,i) => (                    
                    <div className="injuries-s-box2-injury-card" key={i}>
                        <span style={{fontSize: 24}}>{newArray[i].name} Injury</span>
                        <div className="injury-card-conj">
                            <div className="injury-card-info">
                                <span className='injury-card-info-text' text-align= 'center' style={{fontSize: 20}}>{newArray[i].seriousness}</span>
                            </div>
                            <div className="injury-card-info">
                                <span className='injury-card-info-text' style={{fontSize: 20}}>{newArray[i].number} {newArray[i].mesure}</span>
                            </div>

                            <BiXCircle className = 'injury-card-info-popup-close' size={35} onClick={() => handleChange(newArray[i].name,newArray[i].seriousness,newArray[i].number,newArray[i].mesure, 'delete')}></BiXCircle>
                        </div>
                    </div>
                ))}
                
                
            </div>
        </div>
    );

}

export default InjuriesSelect