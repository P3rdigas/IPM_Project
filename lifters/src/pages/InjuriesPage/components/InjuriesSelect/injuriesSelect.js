import {React, useEffect, useRef, useState} from "react";
import Typography from "@mui/material/Typography";
import Dropdown from "../Dropdown/dropdown";
import {BiXCircle} from "react-icons/bi";
import { DateRangePicker } from 'react-date-range';
import format from 'date-fns/format'
import { addDays } from 'date-fns'

import "react-datepicker/dist/react-datepicker.css";
import './injuriesSelect.css'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';



function InjuriesSelect(props) {

    const dropOptions1 = ['Light', 'Medium', 'Severe']
    const dropOptions2 = ['Days', 'Weeks', 'Months']
    const dropOptions3 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
    const arr = []

    const [selected, setSelected] = useState("Seriousness");
    const [selected2, setSelected2] = useState("Mesure");
    const [selected3, setSelected3] = useState("Number");
    const [newArray, setNewArray] = useState(arr);
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    const [open, setOpen] = useState(false)

    const handleChange = (name, s, n, m, fun) => {
        if(fun === 'add') {
            setNewArray(newArray => [...newArray, {name: name, seriousness:s, startDate:n, endDate:m}])
        }
        else {
            setNewArray(injury => injury.filter((item, i) => (item.name !== name || item.seriousness !== s || item.startDate !== n || item.endDate !== m)));
        }
        
    }

    useEffect (() => {
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClick, true)
    })

    const hideOnEscape = (e) => {
        if(e.key === "Escape") {
            setOpen(false)
            setSelected2(`Until ${format(range[0].endDate, "dd/MM/yyyy")}`)
        }
    }

    const refOne = useRef(null)

    const hideOnClick = (e) => {
        if(refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
            setSelected2(`Until ${format(range[0].endDate, "dd/MM/yyyy")}`)
        }
    }
    
    return (
        <div className='injuries-s-main'>
            <Typography gutterBottom variant="h4" component="div">
                Injuries
            </Typography>
            <div className='injuries-s-box1'>
                
                    <div className='injuries-s-box1-card'>
                        <div>
                            <span style={{fontSize: 24}}>{props.parts}</span>
                        </div>
                        <div className='injuries-s-dropdown'>
                            <Dropdown optionsR={dropOptions1} selected={selected} setSelected={setSelected} />
                        </div>
                        <div className='injuries-s-date'>
                            <div>
                                <span style={{fontSize: 14, color: 'grey'}}>Recovery Time</span>
                                <input  value= {` ${format(range[0].startDate, "dd/MM/yyyy")} to ${format(range[0].endDate, "dd/MM/yyyy")}`}
                                    readOnly
                                    className='inputBox' 
                                    onClick={(() => setOpen(open => !open))} 
                                />
                                    
                            </div>
                            <div className='calend' ref={refOne}> 
                                {
                                    open &&
                                    <DateRangePicker                                        
                                        onChange={item => setRange([item.selection])}
                                        editableDateInputs={true}
                                        moveRangeOnFirstSelection={false}
                                        ranges={range}
                                        months={1}
                                        direction='horizontal'
                                        className="calendarElement"
                                    />
                                }                                    
                            </div>       
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
                            <div className="injury-card-info1">
                                <span className='injury-card-info-text' text-align= 'center' style={{fontSize: 20}}>{newArray[i].seriousness}</span>
                            </div>
                            <div className="injury-card-info2">
                                <span className='injury-card-info-text' style={{fontSize: 20}}>{newArray[i].endDate}</span>
                            </div>

                            <BiXCircle className = 'injury-card-info-popup-close' size={35} onClick={() => handleChange(newArray[i].name,newArray[i].seriousness,newArray[i].startDate,newArray[i].endDate, 'delete')}></BiXCircle>
                        </div>
                    </div>
                ))}
                
                
            </div>
        </div>
    );

}

export default InjuriesSelect