import React from "react";
import { Button ,makeStyles} from "@material-ui/core";
import classes from './Rick.module.css';
import { fadeInDownBig } from 'react-animations';
import Radium,{StyleRoot} from 'radium';
const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
  const styles = {
    fadeInDownBig: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInDownBig, 'fadeInDownBig')
    }
  }
const Rick = (props) => {
    const classesforbutton = useStyles();

    const handlechange = ()=>{
        window.open("https://youtu.be/dQw4w9WgXcQ");
        props.movepage();
    }
  return(
      <StyleRoot>
    <div className={classes.box} style={styles.fadeInDownBig}>
      <p style={{fontWeight:'bolder'}}>
        Hurry!! Sankalp is sitting in a coding round, and he’s having trouble
        solving a problem. Using his epic googling skills, he has figured out
        which leetcode problem is in the questionnaire. Click this link and
        solve the problem to help Sankalp.
      </p>
      <Button 
        variant="contained" color="primary" className={classesforbutton.margin}
        style={{backgroundColor: '#4caf50',color:'black'}}
        size="medium" onClick={handlechange}>Click me</Button>

    </div>
    </StyleRoot>
  );
};
export default Rick;
