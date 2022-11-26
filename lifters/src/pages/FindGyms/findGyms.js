import React, { useState } from 'react'
import { FaCity } from 'react-icons/fa'
import { BiCurrentLocation } from 'react-icons/bi'

import Navbar from '../../components/Navbar/navbar'

import { GoogleMap } from '@react-google-maps/api'
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";

import './findGyms.css'

function FindGyms() {
    const [zoom, setZoom] = useState(7)
    const [center, setCenter] = useState({ lat: 39.3325, lng: -7.5113 })

    const handleSearch = (lat, lng) => {
        setZoom(14)
        setCenter({ lat: lat, lng: lng })
    }

    const handleClick = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            handleSearch(position.coords.latitude, position.coords.longitude)
        })
    }

    return(
        <div className='findgyms'>
            <Navbar />

            <div className='findgyms-input'>
                <p>Find your nearest gym</p>

                <div className='findgyms-input-location'>
                    <div className='findgyms-input-city-field'>
                        <FaCity className='findgyms-input-city-icon'/>
                        <PlacesAutocomplete autocomplete={handleSearch} />
                    </div>

                    <button className='findgyms-input-location-button' onClick={handleClick}>
                        <BiCurrentLocation className='findgyms-input-location-icon'/>
                        <span>Search in your location</span>
                    </button>
                </div>
            </div>

            <div className='findgyms-map'>
                <GoogleMap
                    zoom={zoom}
                    center={center}
                    mapContainerClassName='map-container'
                >
                </GoogleMap>
            </div>
        </div>
    )
}

function PlacesAutocomplete(props) {
    const {
      ready,
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions,
    } = usePlacesAutocomplete();
  
    const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();
  
      const results = await getGeocode({ address });
      const coords = await getLatLng(results[0]);
      props.autocomplete(coords.lat, coords.lng);
      
    };
  
    return (
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          className="findgyms-input-city-input"
          placeholder="Insert your city"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    );
}

export default FindGyms