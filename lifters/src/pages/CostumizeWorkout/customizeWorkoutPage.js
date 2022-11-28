import Navbar from "../../components/Navbar/navbar";
import HumanModel3DCW from "./components/3DModelCW/3dmodelCW";
import CardWorkoutCW from "./components/CardWorkoutCW/cardWorkoutCW";
import CardExercisesPerMuscleCW from "./components/CardExercisesPerMuscleCW/cardExercisesPerMuscleCW";
import React,{ useState } from "react";



function CustomizeWorkoutPage() {
    const [cards,setCards] = useState([])
    const [muscles, setMuscles] = useState([])

    return(
        <div className="customize-workout-page-global">
            <Navbar/>
            <HumanModel3DCW muscles={muscles} setMuscles={setMuscles}/>
            <CardWorkoutCW  muscles={muscles} cards={cards} setCards={setCards}/>
        </div>
    )
}

export default CustomizeWorkoutPage