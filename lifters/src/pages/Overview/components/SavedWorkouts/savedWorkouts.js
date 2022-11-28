import React, {useEffect, useState} from 'react';
import CardList from '../CardList/cardList';

import './savedWorkouts.css'

function SavedWorkouts(props) {
    console.log(props.workouts)
    return (
        <div className='saved-wo'>
            <div className='saved-wo-title'>
                <h2>My Workouts</h2>
            </div>
            <div className='saved-wo-list'> 
                <CardList items={props.workouts} handleDelete={props.handleDelete}/>             
            </div>   
        </div>
    )
}

export default SavedWorkouts