import React from "react";
import classes from "../Navforrest/navforr.module.css";
import { fadeIn } from 'react-animations';
import Radium,{StyleRoot} from 'radium';
    const styles = {
        fadeIn: {
          animation: 'x 1s',
          animationName: Radium.keyframes(fadeIn, 'fadeIn')
        }
      }
const navigation = (props) => {
    const somevalues = ["Welcome to Fill Characters round", "Welcome to Funny Question Round" ,"Welcome to the rick and roll play game round", "Congo!! Gaurav you made it, enjoy this video made solely for you"]
  return (
    <StyleRoot>
    <div className={classes.topnav} style={styles.fadeIn}>
      <p>{somevalues[props.valueofpage-1]}</p>
    </div>
    </StyleRoot>
  );
};

export default navigation;
