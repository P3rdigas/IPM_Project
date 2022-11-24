import React, {useState} from 'react';
import './generatedWorkoutsPage.css'
import HumanModel3D from "../../components/3D Model/3dmodel";
import Navbar from "../../components/Navbar/navbar";

function GeneratedWorkoutsPage() {
    return(
        <div className="gw-global">
            <Navbar/>
            <div className="gw-model">
                <HumanModel3D/>
            </div>
        </div>
    )
}

export default GeneratedWorkoutsPage