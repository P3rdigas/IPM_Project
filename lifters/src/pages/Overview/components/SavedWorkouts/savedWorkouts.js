import React, {useState} from 'react';
import CardList from '../CardList/cardList';

import './savedWorkouts.css'

let INITIAL_CARDS = [
    { id: "1", title: '1Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg'},
    { id: "2", title: '2Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg'},
    { id: "3", title: '3Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg'},
    { id: "4", title: '4Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg'},
    { id: "5", title: '5Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg'},
    { id: "6", title: '6Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg'},
    { id: "7", title: '7Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg'},
    { id: "8", title: '8Legs Workout', body: 'Left Leg', body2: 'Right Leg', body3: 'Middle Leg'},
  ];

function SavedWorkouts() {
    const [cards, setCards] = useState(INITIAL_CARDS);

    const deleteCard = (index) => {
        setCards(cards => cards.filter((item, i) => i !== index));
    };

    return (
        <div className='saved-wo'>
            <div className='saved-wo-title'>
                <h2>Your Saved Workouts</h2>
            </div>

            <div className='saved-wo-list'> 
                <CardList items={cards} handleDelete={deleteCard}/>             
            </div>   
        </div>
    )
    
}

export default SavedWorkouts