import Typography from "@mui/material/Typography";
import "./cardExercisesPerMuscleCW.css"
import React from "react";
import ExercisesCardLeftCW from "./exerciseCardLeftCW";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from '@mui/material'
import { Container, Grid } from '@mui/material';

function CardExercisesPerMuscleCW(props) {
    let sp = 0;
    const theme = createTheme({
        breakpoints: {
            keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
            values: {sm: 0, md: 1160, lg: 1580, xl: 1900}
        }
    });
    return(
        <div className='card-exercises-per-muscle-cw'>
            <Typography gutterBottom variant="h4" component="div">
                Exercises
            </Typography>
            <div className="tag-conj-muscle-gw">
                <Container>
                    <ThemeProvider theme={theme}>
                        <Grid container rowSpacing={4} spacing={sp}>
                            {props.muscles.map((muscle, i) => (
                                <Grid>
                                    <div className="tag-muscle-gw">
                                        <span style={{fontSize: 20}}>{muscle}</span>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </ThemeProvider>
                </Container>
            </div>
            <div className="exercises-muscle-conj-card-cw" >
                {props.exercises.map((item, i) => (
                    <ExercisesCardLeftCW cards={props.cards} setCards={props.setCards} name={props.exercises[i].name} exercise={props.exercises[i]} key={i}/>
                ))}
            </div>
        </div>
    )
}

export default CardExercisesPerMuscleCW