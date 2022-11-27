import './generatedWorkoutsPage.css'
import Navbar from "../../components/Navbar/navbar";
import CardGeneratedWorkout from "./components/CardGeneratedWorkout/cardGenereatedWorkout";
import HumanModel3DGW from "./components/3DModelGW/3dmodelGW";

const GENERATED_WORKOUT = [
    /* {name: 'Bicep Curl', reps: "12", sets:"3"},
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
    {name: 'Preacher Curl', reps: "15", sets:"4"},*/
];

function GeneratedWorkoutsPage() {
    return(
        <div>
            <Navbar/>
            <HumanModel3DGW/>
            <CardGeneratedWorkout exercises={GENERATED_WORKOUT}/>
        </div>
    )
}

export default GeneratedWorkoutsPage