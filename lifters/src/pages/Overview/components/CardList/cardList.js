import { Container, Grid } from '@mui/material';
import {React, useState, useEffect} from 'react';
import CardGym from '../Card/cardGym';
import {createTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@mui/material'

let sp = 0;
const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
    values: {sm: 0, md: 1160, lg: 1580, xl: 1900}
  }
});

function CardList({items, handleDelete}) {

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  if(windowSize > 1160 && windowSize < 1580) {
    sp=-65;
  }
  if(windowSize > 1580 && windowSize < 1900) {
    sp=-30;
  }
  if(windowSize > 1900) {
    sp=0;
  }


  return (  
    <Container>
      <ThemeProvider theme={theme}>
        <Grid container rowSpacing={4} spacing={sp}>
            {items.map((card, i) => (
                <Grid item key={card.id} sm={12} md={6} lg={4} xl={3}>
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
        </ThemeProvider>
    </Container>    
  );
}

export default CardList;