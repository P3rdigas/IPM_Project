import { Container, Grid } from '@mui/material';
import {React, useState, useEffect} from 'react';
import CardGym from '../Card/cardGym';
import {createTheme} from '@mui/material/styles'
import {ThemeProvider} from '@mui/material'

let sp = 0;
const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
    values: {mini: 0, sm: 700, md: 1200, lg: 1350, xl: 1750}
  }
});

function InjuriesList({items}) {


  return (   
    <Container>
        <ThemeProvider theme={theme}>
            <Grid container rowSpacing={0} spacing={-20}>
                {items.map((img, i) => (
                    <Grid item key={img.id} mini={12} sm={6} md={4} lg={3} xl={2}>
                            <img src={img.src} width={100} height={100}/>
                    </Grid>
                ))}
            </Grid>
        </ThemeProvider>
    </Container>    
  );
}

export default InjuriesList;