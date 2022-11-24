import React, {useState} from 'react';
import CardGym from "../Card/cardGym";
import { FiTrash2 } from "react-icons/fi";

import './savedWorkouts.css'

function SavedWorkouts() {
    const [cards, setCards] = useState([]);

    const deleteCard = (index) => {
        setCards(cards => cards.filter((item, i) => i !== index));
    };

    const cardList = [
        {id:'1', card:createCard(0, '1Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')},
        {id:'2', card:createCard(1, '2Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')},
        {id:'3', card:createCard(2, '3Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')},
        {id:'4', card:createCard(3, '4Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')},
        {id:'5', card:createCard(4, '5Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')},
        {id:'6', card:createCard(5, '6Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')},
        {id:'7', card:createCard(6, '7Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')},
        {id:'8', card:createCard(7, '8Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')}
    ];

    function createCard(index, title, body, body2, body3) {
        return(
            <CardGym className='card-geral'
            index={index}
            title={title}
            body={body}
            body2={body2}
            body3={body3}
            handleDelete={deleteCard(index)}
            />
        )
    }

    setCards(cardList)

    console.log("ola")

    


    {/*const discardCard = (e) => {
        let x = e.target.getAttribute('remCard')
        setCards(cards.filter(items => items.id !==x))    
    }

    const cardList = [
        {id:'1', card:createCard('1Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')},
        {id:'2', card:createCard('2Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')},
        {id:'3', card:createCard('3Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')},
        {id:'4', card:createCard('4Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')},
        {id:'5', card:createCard('5Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')},
        {id:'6', card:createCard('6Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')},
        {id:'7', card:createCard('7Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')},
        {id:'8', card:createCard('8Legs Workout', 'Left Leg', 'Right Leg', 'Middle Leg')}
    ];

    function createCard(title, body, body2, body3) {
        return(
            <CardGym className='card-geral'
            title={title}
            body={body}
            body2={body2}
            body3={body3}
            handleDelete={discardCard}
            />
        )                    
    }

const [cards, setCards] = useState(cardList);*/}

    return (
        <div className='saved-wo'>
            <div className='all-cards'>
                <div className='saved-wo-title'>
                    <h2>Your Saved Workouts</h2>
                </div>
                <div className='yauuuu'> 
                    {cards.map((card, index) => (
                        <div key={index} className={'card' + index}>
                            {/*{console.log(index)}*/}
                            {card.card}
                            {/*<FiTrash2 className='workout-card-discard' onClick={deleteCard(index)}/>*/}
                        </div>    
                        ))}                      
                </div>
            </div>    
        </div>
    )
    
}

export default SavedWorkouts