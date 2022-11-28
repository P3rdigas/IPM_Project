import React, {useState} from 'react';
import './injuriesPage.css'
import Navbar from "../../components/Navbar/navbar";
import InjuriesSelect from './components/InjuriesSelect/injuriesSelect';
import HumanModel3DInjuries from "./components/3DModelInjuries/3dmodelInjuries";


function InjuriesPage() {
    const [muscle, setMuscle] = useState("")
    return(
        <div>
            <Navbar/>
            <HumanModel3DInjuries muscle={muscle} setMuscle={setMuscle}/>
            <InjuriesSelect parts={muscle}/>
            
        </div>
    )
}

export default InjuriesPage