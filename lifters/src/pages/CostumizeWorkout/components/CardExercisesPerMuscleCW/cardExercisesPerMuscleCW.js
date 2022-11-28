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

    function generateHeight(){
        const tags= document.getElementById("tags-height-div");
        if (tags == null){
            return "90%";
        }
        const heightCard= document.getElementById("card").offsetHeight.toPrecision();
        const tagsHeight = tags.offsetHeight.toPrecision()
        const pertentageTagsHeight =  tagsHeight/heightCard;
        const heightExercises = (0.85 - pertentageTagsHeight)*100;
        return `${heightExercises}%`;
    }

    return(
        <div id="card" className='card-exercises-per-muscle-cw'>
            <Typography gutterBottom variant="h4" component="div">
                Exercises
            </Typography>
            <div className="tag-conj-muscle-gw">
                <Container id="tags-height-div">
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
            <div className="exercises-muscle-conj-card-cw" style={{"height": generateHeight()}}>
                {props.exercises.map((item, i) => (
                    <ExercisesCardLeftCW cards={props.cards} setCards={props.setCards} name={item.properties.exercise_name.value} exercise={item} key={i}/>
                ))}
            </div>
        </div>
    )
}

export default CardExercisesPerMuscleCW