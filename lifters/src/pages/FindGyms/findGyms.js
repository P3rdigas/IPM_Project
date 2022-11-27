import React, { useState, useRef, useEffect } from 'react'
import { FaCity } from 'react-icons/fa'
import { BiCurrentLocation } from 'react-icons/bi'

import Navbar from '../../components/Navbar/navbar'

import { GoogleMap, Marker } from '@react-google-maps/api'
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";

import './findGyms.css'

function FindGyms() {
    const [zoom, setZoom] = useState(7)
    const [center, setCenter] = useState({ lat: 39.3325, lng: -7.5113 })
    const [gyms, setGyms] = useState([])

    const ref = useRef();
    const [map, setMap] = useState(null);

    useEffect(() => {
      if (ref.current && !map) {
        setMap(new window.google.maps.Map(ref.current, {}));
      }
    }, [ref, map]);

    const handleSearch = (lat, lng) => {
        const centerSearch = { lat: lat, lng: lng }

        var request = {
          location: centerSearch,
          radius: '5000',
          type: ['gym']
        };

        let newGyms = []
      
        const service = new window.google.maps.places.PlacesService(map);
        service.nearbySearch(request, function(results, status, pagination) {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    newGyms.push(results[i]);
                }
            }

            if (pagination && pagination.hasNextPage) {
                pagination.nextPage();
            }

            if(newGyms.length === 0) {
                alert("No gyms found in a 5km radius")
            } else {
                setGyms(newGyms)
                setZoom(14)
                setCenter(centerSearch)
            }
          });
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

            <div  className='findgyms-map'>
                <GoogleMap
                    zoom={zoom}
                    center={center}
                    mapContainerClassName='map-container'
                    ref={ref}
                >
                    {gyms.map((marker, i) => (
                        <Marker key={i} 
                                position={{ lat: marker.geometry.location.lat(), lng: marker.geometry.location.lng()}}        
                        />
                    ))}
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