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
    const username = sessionStorage.getItem("username")

    const handleChange = (id, name, s, n, m, fun) => {
        if(fun === 'add') {
            const injury = {
                username: username,
                muscle: name,
                seriousness: s,
                startDate: n,
                endDate: m
            }

            fetch(`/rest/${username}/injury`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(injury)
            }).then(response => {
                if(response.ok) 
                    return response.json()
            }).then(data => {
                alert("Injury inserted")
                setNewArray(newArray => [...newArray, {id: data.key.path[0].id, name: name, seriousness: s, startDate: n, endDate:m}])
            })
        }
        else {
            fetch(`/rest/${username}/injury/${id}`, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" }
            }).then(response => {
                if(response.ok) {
                    alert("Injury deleted")
                    setNewArray(injury => injury.filter((item, i) => (item.id !== id)));
                } 
            })
        }
    }

    useEffect (() => {
        fetch(`/rest/${username}/injuries`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then(response => {
            if(response.ok) 
                return response.json()
        }).then(data => {
            let injuries = []
            for(let i = 0; i < data.length; i++) {
                let injury = data[i].properties
                injuries.push({id: data[i].key.path[0].id, name: injury.injury_muscle.value, seriousness: injury.injury_seriousness.value, 
                    startDate: injury.injury_start.value, endDate: injury.injury_end.value})
            }
            setNewArray(injuries)
        })
    }, [])

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
            <div className='injuries-s-box1'>{
                (props.parts.length > 0) ?(
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
                ):""
            }
            </div>
            <div className='injuries-s-button' onClick={()=> handleChange(newArray.length, props.parts, selected, selected3, selected2, 'add')}>
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

                            <BiXCircle className = 'injury-card-info-popup-close' size={35} onClick={() => handleChange(newArray[i].id,newArray[i].name,newArray[i].seriousness,newArray[i].startDate,newArray[i].endDate, 'delete')}></BiXCircle>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default InjuriesSelect