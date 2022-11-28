import React, {useEffect, useState} from 'react';
import CardList from '../CardList/cardList';

import './savedWorkouts.css'

function SavedWorkouts(props) {
    return (
        <div className='saved-wo'>
            <div className='saved-wo-title'>
                <h2>My Workouts</h2>
            </div>
            <div className='saved-wo-list'> 
                <CardList items={props.workouts} handleDeleteCardsSW={props.handleDeleteCardsSW}/>
            </div>   
        </div>
    )
}

export default SavedWorkouts