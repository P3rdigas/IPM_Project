import * as React from 'react';
import CardGym from "../Card/cardGym";
import './savedWorkouts.css'

function SavedWorkouts() {
    return (
        <div className='saved-wo'>
            <div class='saved-wo-title'>
                <h2>Your Saved Workouts</h2>
            </div>
            <div className='all-cards'>
                <div className='card1'>
                    <CardGym className='card1-c'
                    title='Arms Training'
                    body='Bicep'
                    body2='Tricep'
                    body3='Vareta'
                    />                
                </div>
                <div className='card2'>
                    <CardGym className='card2-c'
                    title='Arms Training'
                    body='Bicep'
                    body2='Tricep'
                    body3='Vareta'
                    />
                </div>
                <div className='card3'>
                    <CardGym className='card3-c'
                    title='Arms Training'
                    body='Bicep'
                    body2='Tricep'
                    body3='Vareta'
                    />                
                </div>
                <div className='card4'>
                    <CardGym className='card4-c'
                    title='Arms Training'
                    body='Bicep'
                    body2='Tricep'
                    body3='Vareta'
                    />
                </div>
                <div className='card5'>
                    <CardGym className='card5-c'
                    title='Arms Training'
                    body='Bicep'
                    body2='Tricep'
                    body3='Vareta'
                    />                
                </div>
                <div className='card6'>
                    <CardGym className='card6-c'
                    title='Arms Training'
                    body='Bicep'
                    body2='Tricep'
                    body3='Vareta'
                    />
                </div>
                <div className='card7'>
                    <CardGym className='card7-c'
                    title='Arms Training'
                    body='Bicep'
                    body2='Tricep'
                    body3='Vareta'
                    />                
                </div>
                <div className='card8'>
                    <CardGym className='card8-c'
                    title='Arms Training'
                    body='Bicep'
                    body2='Tricep'
                    body3='Vareta'
                    />
                </div>
            </div>    
        </div>
    )
}

export default SavedWorkouts