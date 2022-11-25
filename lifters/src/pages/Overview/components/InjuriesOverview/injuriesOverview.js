import * as React from 'react';
import Typography from '@mui/material/Typography';
import bicep from '../../../../images/bicep.png'
import mao from '../../../../images/mao.png'
import pe from '../../../../images/pe.png'
import pernas from '../../../../images/pernas.png'
import InjuriesList from '../InjuriesList/injuriesList'

import './injuriesOverview.css'

let INITIAL_INJURIES = [
  { id: "1", src: bicep},
  { id: "2", src: mao},
  { id: "3", src: pe},
  { id: "4", src: pernas},
  { id: "5", src: bicep},
];

function InjuriesOverview() {

  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
            My Injuries
      </Typography>
      <InjuriesList items={INITIAL_INJURIES}>

      </InjuriesList>
    </div>
  );
}

export default InjuriesOverview