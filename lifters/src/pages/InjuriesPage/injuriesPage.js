import React, {useState} from 'react';
import './injuriesPage.css'
import Navbar from "../../components/Navbar/navbar";
import InjuriesSelect from './components/InjuriesSelect/injuriesSelect';
import HumanModel3DInjuries from "./components/3DModelInjuries/3dmodelInjuries";

const INJURED ='Armyauuuu';
;

function InjuriesPage() {
    return(
        <div>
            <Navbar/>
            <HumanModel3DInjuries/>
            <InjuriesSelect parts={INJURED}/>
            
        </div>
    )
}

export default InjuriesPage