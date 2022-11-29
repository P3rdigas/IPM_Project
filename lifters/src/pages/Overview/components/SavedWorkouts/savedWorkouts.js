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
                {
                (props.workouts.length > 0) ?
                    <CardList items={props.workouts} handleDeleteCardsSW={props.handleDeleteCardsSW}/>
                    :
                    <div>
                        <span style={{fontSize: 20}} >You dont have any saved workouts</span>
                    </div>
                }
            </div>   
        </div>
    )
}

export default SavedWorkouts