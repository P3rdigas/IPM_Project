import { Container, Grid } from '@mui/material';
import React from 'react';
import CardGym from '../Card/cardGym';

function CardList({items, handleDelete}) {
  return (
    <Container>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {items.map((card, i) => (
                <Grid item key={card.id} md={12} lg={6}>
                   <CardGym
                       index={i}
                       key={card.id}
                       title={card.title}
                       body={card.body}
                       body2={card.body2}
                       body3={card.body3}
                       handleDelete={() => handleDelete(i)}
                   />
                </Grid>
            ))}
        </Grid>
    </Container>
  );
}

export default CardList;