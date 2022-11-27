import './generatedWorkoutsPage.css'
import Navbar from "../../components/Navbar/navbar";
import CardGeneratedWorkout from "./components/CardGeneratedWorkout/cardGenereatedWorkout";
import HumanModel3DGW from "./components/3DModelGW/3dmodelGW";
import {useState} from "react";

function GeneratedWorkoutsPage() {
    const [muscles, setMuscles] = useState([])

    const handleSetMuscle = (name) => {
        if(muscles.filter((item) => item === name).length > 0) {
            setMuscles(muscles.filter((item) => item !== name));
        }
        else {
            const newMuscles = [name,...muscles]
            setMuscles(newMuscles)
        };
    };

    const handleDelete = (name) => {
        setMuscles(muscles.filter((item) => item !== name));
    }
    
    return(
        <div>
            <Navbar/>
            <HumanModel3DGW handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscles={muscles}/>
            <CardGeneratedWorkout muscles={muscles}/>
        </div>
    )
}

export default GeneratedWorkoutsPage