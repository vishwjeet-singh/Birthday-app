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
    

    const ans = 'vishwjeet';
  return (
    <StyleRoot>
    <div className={classes.box} style={styles.fadeIn}>
      <p style={{marginBottom:'0px'}}>
      Lorem ipsum __________, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim __________ ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit _____________ esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in __________ culpa qui officia deserunt mollit anim id est laborum.
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
