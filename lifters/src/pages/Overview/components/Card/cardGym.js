import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GrCircleInformation } from "react-icons/gr";
import { FiTrash2 } from "react-icons/fi";
import discardCard from '../SavedWorkouts/savedWorkouts.js';

import './cardGym.css'

function CardGym({title, body, body2, body3, handle}) {
  return (
    <div className='cardf'>
    <Card sx={{ minWidth: 250, maxWidth:250, minHeight: 230, maxHeight:230  }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h2>{body}</h2>
          <h2>{body2}</h2>
          <h2>{body3}</h2>
        </Typography>
      </CardContent>
      <CardActions>
        <GrCircleInformation className='workout-card-info' onClick={handle}/>        
      </CardActions>
    </Card>
    </div>
  );
}
export default CardGym