import * as React from 'react';
import Typography from '@mui/material/Typography';
import bicep from '../../../../images/bicep.png'
import mao from '../../../../images/mao.png'
import pe from '../../../../images/pe.png'
import pernas from '../../../../images/pernas.png'

import './injuriesOverview.css'

let injuryList = [];

injuryList.push(bicep)
injuryList.push(mao)
injuryList.push(pe)
injuryList.push(pernas)

function showInjuryN(nInjury) {
  return(
      <img src={injuryList[nInjury]} className={''.concat('injury', nInjury+1)} alt={''.concat('injury-alt', nInjury+1)} width={100} height={100}/>
  )   
}

function listCards() {
  return (
      <div className='injury-images'>
        {showInjuryN(0)}
        {showInjuryN(1)}
        {showInjuryN(2)}
        {showInjuryN(3)}
      </div>
  )       
  
}

function InjuriesOverview() {
  return (
    <div>
      <Typography gutterBottom variant="h5" component="div">
            My Injuries
      </Typography>
      {listCards()}
    </div>
  );
}

export default InjuriesOverview