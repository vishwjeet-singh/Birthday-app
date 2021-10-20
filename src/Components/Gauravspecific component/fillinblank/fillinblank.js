import { Button ,makeStyles} from "@material-ui/core";
import React, {  useState } from "react";
import classes from "./fillinblank.module.css";
import { fadeIn } from 'react-animations';
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
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }
const Fillinblank = (props) => {
    const classesforbutton = useStyles();

    const [value,setValue] = useState('');
    const handleChange = (event)=>{
        setValue(event.target.value);
    }
    

    const ans = 'prakharvishwjeetraghavchaitanyasankalparnabsuryanshu';
  return (
    <StyleRoot>
    <div className={classes.box} style={styles.fadeIn}>
      <p style={{fontSize:'18px'}}><strong>Story Puzzle</strong></p>
      <p style={{marginBottom:'0px'}}>
      Covid has ended, colleges have opened. Gaurav returns to his room after almost 2 years. Life resumes as usual in campus. However, normal for Gaurav also means he starts losing his belongings like keys, earphones and the banana you get with your breakfast, but something seems off. He notices that most of the items lost are either food items or daily accessories such as phone charger and deodorant. So Gaurav gathers DostLog and starts questioning them.
      <strong>You must guess which DL member replied with what story.</strong> You must also write the name of the culprit in the final blank below, based on the different stories you hear.<br/>
      (_______) – No bro, but I did see Vishwjeet going into your room the other day. Ok, let's go ask Vishwjeet and look for your stuff!
      <br/>
      (_______) – No, although I did go to your room to get the iron. Abhay was playing PUBG, so I think he might have seen me taking the iron.
      <br/>
      (_______) – No man, but you know what, I also had really good Sony earphones once. We were traveling in the car once and my mom asked for those. Then I don't know where she kept them and they also got misplaced. But I did see Arnab in the corridor outside your room, pacing up and down.
      <br/>
      (_______) – Huh? I didn’t do anything. I did come to your room though, to get the broom. Later I cleaned the room and had breakfast with Suryanshu who surprisingly woke up early.
      <br/>
      (_______) – I haven't seen your stuff, sorry man. Just because of such things I don't buy expensive things. I had my Samsung earphones for 3 years and they worked completely fine.
      <br/>
      (_______) – Hey bro, you're looking really sexy today! I was waiting for the bathroom to be free. They said some guy named Suryanshu came early in the morning and made a huge smelly dump in our washroom
      <br/>
      Culprit – (_______)
      <br/>
      </p>
      
      <strong>Type your answer here one after other as to be filled in the blanks, without spaces</strong>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      <form>
        <label>
          <input
            type="text"
            value = {value}
            onChange={handleChange}
          />
        </label>
        <Button 
        variant="contained" color="primary" className={classesforbutton.margin}
        style={{backgroundColor: '#4caf50',color:'black'}}
        size="small" onClick={ans===value?props.movepage:null}>Submit</Button>
      </form>
      {value?<span >Your answer : {value}</span>:null}
      {value?value===ans?<span style={{marginLeft:'45px',color:'green'}}>Next Page Access granted just click submit</span>:<span style={{marginLeft:'45px',color:'red'}}>Access Denied</span>:null}
      </div>
    </div>
    </StyleRoot>
  );
};

export default Fillinblank;
