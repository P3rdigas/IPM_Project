import Typography from "@mui/material/Typography";
import {BiXCircle} from "react-icons/bi";
import React from "react";
import "./cardMuscleChosenGW.css"

function CardMuscleChosenGW(props) {
    return (
        <div className='card-muscle-chosen-gw'>
            <Typography gutterBottom variant="h6" component="div">
                Chosen:
            </Typography>
            {props.muscles.map((name,i) => (
                <div className="muscle-card-gw" key={i}>
                    <span>{name}</span>
                    <BiXCircle size={20} className='muscle-card-remove-gw' onClick={() => props.handleDelete(name)}/>
                </div>
            ))}
        </div>
    );
}

export default CardMuscleChosenGW