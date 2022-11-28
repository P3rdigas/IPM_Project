import {React, useEffect, useRef, useState} from "react";
import './calendarPopup.css'
import {BiXCircle} from "react-icons/bi";
import CalendarDropdown from '../CalendarDropdown/calendarDropdown'
import { Calendar } from 'react-date-range';
import format from 'date-fns/format'

import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';


const EXERCISES = [
    {name: 'Bicep Curl', reps: "12", sets:"3"},
{name: 'Rows', reps: "8", sets:"3"},
{name: 'Pull up', reps: "15", sets:"4"},
{name: 'Preacher Curl', reps: "15", sets:"4"},
{name: 'Bicep Curl', reps: "12", sets:"3"},
{name: 'Rows', reps: "8", sets:"3"},
{name: 'Pull up', reps: "15", sets:"4"},
{name: 'Preacher Curl', reps: "15", sets:"4"},
{name: 'Bicep Curl', reps: "12", sets:"3"},
{name: 'Rows', reps: "8", sets:"3"},
{name: 'Pull up', reps: "15", sets:"4"},
{name: 'Preacher Curl', reps: "15", sets:"4"}]


function CalendarPopup(props) {

    function getAllWO() {
        let all = []
        for(let i = 0; i < props.allWO.length; i++) {
            all.push(props.allWO[i].title)
        }
        return all
    }
    
    let savedWO = getAllWO()

    const [selected, setSelected] = useState("Choose Workout");
    const [calendar, setCalendar] = useState('Choose the day')
    const [open, setOpen] = useState(false)

    const handleSelect = (date) => {
        setCalendar(format(date, 'yyyy-MM-dd'))
    }

    useEffect (() => {
        document.addEventListener("keydown", hideOnEscape, true)
    })

    const hideOnEscape = (e) => {
        if(e.key === "Escape") {
            setOpen(false)
        }
    }

    function saveAndExit()  {
        props.handleChange(`${selected}_${calendar}`, selected, `${calendar}`, EXERCISES)
        props.setTrigger(false)
    }


    return (props.trigger) ? (
        <div className='popup-cal'>
            <div className='pop-cal'>
                <BiXCircle className = 'popup-close-cal' onClick={() => props.setTrigger(false)} size={40}></BiXCircle>  
                             
                <div className='calendar-popup'>
                    <h1>Program Workout</h1> 
                    <div className='calendar-popup-divs' >
                    <div className="calendar-popup-pickdate">
                            <input value= {calendar} readOnly className="inputBox" onClick={(() => setOpen(open => !open))} />
                            {open &&<Calendar className='calendar-element' date={new Date()} onChange={handleSelect} />}
                    </div>
                        <div className="calendar-popup-dropdown">
                            <CalendarDropdown optionsR={savedWO} selected={selected} setSelected={setSelected} />
                        </div>                        
                    </div>
                    <div className='calendar-save-button'>
                        <span style={{fontSize: 24}} onClick={() => saveAndExit()}>Confirm</span>
                    </div>
                </div>
            </div>
        </div>

    ) : "";
}
export default CalendarPopup