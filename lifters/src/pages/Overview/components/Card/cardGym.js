import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GrCircleInformation } from "react-icons/gr";
import { FiTrash2 } from "react-icons/fi";
import './cardGym.css'

function CardGym(props) {
  return (
    <div className='cardf'>
    <Card sx={{ minWidth: 250, maxWidth:250, minHeight: 230, maxHeight:230}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <br>{props.tags}</br>
        </Typography>
      </CardContent>
      <CardActions>
        <FiTrash2 className='workout-card-trashcan' onClick={() => props.handleDeleteCardsSW(props.id)}/>
        <GrCircleInformation className='workout-card-info' onClick={() => props.openPop(props.index)}/>
      </CardActions>
    </Card>
    </div>
  );
}
export default CardGym