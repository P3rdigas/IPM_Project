import React, {useState} from 'react';
import './generatedWorkoutsPage.css'
import HumanModel3D from "../../components/3D Model/3dmodel";
import Navbar from "../../components/Navbar/navbar";
import CardGeneratedWorkout from "./components/CardGeneratedWorkout/cardGenereatedWorkout";

const GENERATED_WORKOUT = [
    {name: 'Bicep Curl', reps: "12", sets:"3"},
    {name: 'Rows', reps: "8", sets:"3"},
    {name: 'Pull up', reps: "15", sets:"4"},
    {name: 'Preacher Curl', reps: "15", sets:"4"},

];

function GeneratedWorkoutsPage() {
    return(
        <div>
            <Navbar/>
            <HumanModel3D/>
            <CardGeneratedWorkout exercises={GENERATED_WORKOUT}/>
        </div>
    )
}

export default GeneratedWorkoutsPage