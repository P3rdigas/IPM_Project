import { Container, Grid } from '@mui/material';
import {React, useState, useEffect} from 'react';
import CardGym from '../Card/cardGym';
import Popup from '../Popup/popup';


function PopupList(items) {

  


  return (  
    <div>
        {items.map((popup) => (
            
            <Popup
                trigger={popup.trigger}
            />
        ))}
    </div>   
  );
}

export default PopupList;