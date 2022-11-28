import { Container, Grid } from '@mui/material';
import React, { useState, useEffect} from 'react';
import CardGym from '../Card/cardGym';
import {createTheme} from '@mui/material/styles'
import {ThemeProvider} from '@mui/material'
import Popup from "../Popup/popup"

let sp = 0;
const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
    values: {sm: 0, md: 1150, lg: 1200, xl: 1250}
  }
});

const FALSE_ARRAY = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]

function CardList(props) {
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
  
  const [buttonPopup, setButtonPopup] = useState(FALSE_ARRAY)

  const openPop = (index) => {
    setButtonPopup(prevState => prevState.map((item, idx) => idx === index ? !item : item))
};

const closePop = (index) => {
  setButtonPopup(prevState => prevState.map((item) => item=false))
};
/*

handleDelete={props.handleDelete}
                       buttonO={buttonPopup}
                       openPop={openPop}

                       <Popup trigger={buttonPopup[i]} setTrigger={() => closePop(card.id)} title={card.title} exercises={card.exercises}></Popup>
*/

  return (  
    <Container>
      <ThemeProvider theme={theme}>
        <Grid container rowSpacing={4} spacing={sp}>
            {props.items.map((card, i) => (
              <Grid item key={card.id} sm={12} md={6} lg={4} xl={3} xxl={2}>
                <Grid>
                   <CardGym
                       id={card.id}
                       title={card.title}
                       tags={card.tags}
                       
                   />
                </Grid>
                
                  
              </Grid> 
            ))}
            {windowSize}
        </Grid>
        </ThemeProvider>
    </Container>    
  );
}

export default CardList;