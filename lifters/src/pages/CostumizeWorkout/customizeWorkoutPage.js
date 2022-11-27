import Navbar from "../../components/Navbar/navbar";
import HumanModel3DCW from "./components/3DModelCW/3dmodelCW";
import CardWorkoutCW from "./components/CardWorkoutCW/cardWorkoutCW";
import CardExercisesPerMuscleCW from "./components/CardExercisesPerMuscleCW/cardExercisesPerMuscleCW";
import React,{ useState } from "react";

let GENERATED_WORKOUT = [
    {name: 'Bicep Curl', reps: "12", sets:"3"},
    {name: 'Rows', reps: "8", sets:"3"},
    {name: 'Pull up', reps: "15", sets:"4"},
    {name: 'Preacher Curl', reps: "15", sets:"4"},
    {name: 'Bench Press', reps: "12", sets:"3"},
    {name: 'Military Press', reps: "8", sets:"3"},
];


function CustomizeWorkoutPage() {
    return(
        <div className="customize-workout-page-global">
            <Navbar/>
            <HumanModel3DCW/>
            <CardExercisesPerMuscleCW exercises={GENERATED_WORKOUT}/>
            <CardWorkoutCW exercises={GENERATED_WORKOUT}/>
        </div>
    )
}

export default CustomizeWorkoutPage