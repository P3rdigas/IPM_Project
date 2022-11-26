import React, {useState} from 'react';
import './injuriesPage.css'
import HumanModel3D from "../../components/3D Model/3dmodel";
import Navbar from "../../components/Navbar/navbar";
import InjuriesSelect from './components/InjuriesSelect/injuriesSelect';

const INJURED ='Armyauuuu';
;

function InjuriesPage() {
    return(
        <div>
            <Navbar/>
            <HumanModel3D/>
            <InjuriesSelect parts={INJURED}/>
            
        </div>
    )
}

export default InjuriesPage