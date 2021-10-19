import React,{useState} from "react";
import { Button ,makeStyles} from "@material-ui/core";
import classes from './Rick.module.css';
import { fadeInDownBig } from 'react-animations';
import Radium,{StyleRoot} from 'radium';
import img from './image1.jpg'
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
    const [hide,sethide] = useState(false);
    const handlechange = ()=>{
        sethide(true);
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
      {(!hide)?
      <Button
        variant="contained" color="primary" className={classesforbutton.margin}
        style={{backgroundColor: '#4caf50',color:'black'}}
        size="medium" onClick={handlechange}>Click me</Button>:null}
      {hide?<div style={{width:'500px',height:'300px',display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
        <img style={{height:'100%',width:'100%',objectFit:'cover'}} src = {img} alt="cant load"/>
      </div>:null}

    </div>
    </StyleRoot>
  );
};
export default Rick;
