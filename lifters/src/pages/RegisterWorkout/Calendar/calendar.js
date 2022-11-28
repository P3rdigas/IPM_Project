import {React, useState, useEffect} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import CalendarPopup from '../CalendarPopup/calendarPopup';
import EditPopup from '../EditPopup/editPopup';
import format from 'date-fns/format'
import './calendar.css'

let SAVED_WORKOUTS = [
  {title: 'Legs Workout', exercises:[
    {name: 'Bicep Curl', reps: "12", sets:"3", kgPerSet:[]},
    {name: 'Rows', reps: "8", sets:"3", kgPerSet:[]},
    {name: 'Pull up', reps: "15", sets:"4", kgPerSet:[]},
    {name: 'Preacher Curl', reps: "15", sets:"4", kgPerSet:[]},
    {name: 'Bicep Curl', reps: "12", sets:"3",kgPerSet:[]},
    {name: 'Rows', reps: "8", sets:"3", kgPerSet:[]},
    {name: 'Pull up', reps: "15", sets:"4", kgPerSet:[]},
    {name: 'Preacher Curl', reps: "15", sets:"4", kgPerSet:[]},
    {name: 'Bicep Curl', reps: "12", sets:"3", kgPerSet:[]},
]},
{title: 'Back Workout', exercises:[
  {name: 'Bicep Curl', reps: "12", sets:"3", kgPerSet:[]},
  {name: 'Rows', reps: "8", sets:"3",kgPerSet:[]},
  {name: 'Pull up', reps: "15", sets:"4", kgPerSet:[]},
  {name: 'Preacher Curl', reps: "15", sets:"4", kgPerSet:[]},
  {name: 'Bicep Curl', reps: "12", sets:"3", kgPerSet:[]},
  {name: 'Rows', reps: "8", sets:"3", kgPerSet:[]},
  {name: 'Pull up', reps: "15", sets:"4", kgPerSet:[]},
  {name: 'Preacher Curl', reps: "15", sets:"4", kgPerSet:[]},
  {name: 'Bicep Curl', reps: "12", sets:"3", kgPerSet:[]},
]},
{title: 'Arms Workout', exercises:[
  {name: 'Bicep Curl', reps: "12", sets:"3", kgPerSet:[]},
  {name: 'Rows', reps: "8", sets:"3", kgPerSet:[]},
  {name: 'Pull up', reps: "15", sets:"4", kgPerSet:[]},
  {name: 'Preacher Curl', reps: "15", sets:"4", kgPerSet:[]},
  {name: 'Bicep Curl', reps: "12", sets:"3", kgPerSet:[]},
  {name: 'Rows', reps: "8", sets:"3", kgPerSet:[]},
  {name: 'Pull up', reps: "15", sets:"4", kgPerSet:[]},
  {name: 'Preacher Curl', reps: "15", sets:"4", kgPerSet:[]},
  {name: 'Bicep Curl', reps: "12", sets:"3", kgPerSet:[]},
]}
]

function Calendar() {

    let height = 0;
    const [windowSize, setWindowSize] = useState(window.innerHeight);

    useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerHeight);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  if(windowSize > 600) {
    height = '500px'
  }

  if(windowSize > 700) {
    height = '600px'
  }

  if(windowSize > 800) {
    height = '700px'
  }

  if(windowSize > 900) {
    height = '800px'
  }

  if(windowSize > 1000) {
    height = '900px'
  }

  if(windowSize > 1100) {
    height = '1000px'
  }

  const [newArray, setNewArray] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false)
  const [buttonPopup2, setButtonPopup2] = useState(false)
  const [eventInfo, setEventInfo] = useState({id: '', title:'', start:'', exercises:[]})

  const handleChange = (id, title, date, exercises) => {
    setNewArray([...newArray, {id: id, title:title, start:date, exercises:exercises}])
    console.log(newArray)

  }  

  const closePop = () => {
    setButtonPopup(prevState => prevState=false)
  };

  const closePop2 = () => {
    setButtonPopup2(prevState => prevState=false)
  };

  let kgS = []

  function sendInfo(agrs) {

    let exercises = []

    kgS = []
    for(let i = 0; i < SAVED_WORKOUTS.length; i++) {
      if(agrs.title === SAVED_WORKOUTS[i].title) {
        for(let j = 0; j < SAVED_WORKOUTS[i].exercises.length; j++) {
          kgS.push([])
        }
        for(let j = 0; j < SAVED_WORKOUTS[i].exercises.length; j++) {

          

          console.log(SAVED_WORKOUTS[i].exercises[j].kgPerSet.length)
          console.log(SAVED_WORKOUTS[i].exercises[j].sets)
          if(SAVED_WORKOUTS[i].exercises[j].kgPerSet.length != SAVED_WORKOUTS[i].exercises[j].sets) {
            for(let k = 0; k < SAVED_WORKOUTS[i].exercises[j].sets; k++) {   
              SAVED_WORKOUTS[i].exercises[j].kgPerSet.push("")
              kgS[j].push("")
            }
          }
            
        }
        exercises = SAVED_WORKOUTS[i].exercises
      }
    }
    console.log(kgS)






    setEventInfo(item => item= {id:agrs.id, title:agrs.title, start:format(agrs.start, "yyyy/MM/dd"), exercises:exercises})

  }

    return (
        <div>
            <div onClick={() => setButtonPopup(true)} className='button-add-wo'>
              <span >Add Workout</span>
            </div>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                weekends={true}
                height={height}
                eventBackgroundColor={'#FF4500'}
                editable={true}
                selectable={true}
                eventClick={ function(agrs) {
                  setButtonPopup2(true)
                  sendInfo(agrs.event)
                  }}
                dayMaxEvents={true}
                events={newArray}
              />
                                       
            <CalendarPopup trigger={buttonPopup} setTrigger={() => closePop()} handleChange={handleChange} allWO ={SAVED_WORKOUTS}></CalendarPopup>
            <EditPopup trigger={buttonPopup2} setTrigger={() => closePop2()} allWO ={SAVED_WORKOUTS} event={eventInfo} allKgSets={kgS}></EditPopup>
      </div>
    );

}

export default Calendar