import React from 'react'
import { FaCity } from 'react-icons/fa'
import { BiCurrentLocation } from 'react-icons/bi'

import Navbar from '../../components/Navbar/navbar'

import Map from '../../images/map.png'

import './findGyms.css'

function handleClick() {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
    })
}

function FindGyms() {
    return(
        <div className='findgyms'>
            <Navbar />

            <div className='findgyms-input'>
                <p>Find your nearest gym</p>

                <div className='findgyms-input-location'>
                    <div className='findgyms-input-city-field'>
                        <FaCity className='findgyms-input-city-icon'/>
                        <input type="text" className="findgyms-input-city-input" placeholder='Insert your city' />
                    </div>

                    <button className='findgyms-input-location-button' onClick={handleClick}>
                        <BiCurrentLocation className='findgyms-input-location-icon'/>
                        <span>Search in your location</span>
                    </button>
                </div>
            </div>

            <div className='findgyms-map'>
                <img className='findgyms-map-image' src={Map} alt='map' />
            </div>
        </div>
    )
}

export default FindGyms