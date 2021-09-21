import React from "react";
import classes from "../Navforrest/navforr.module.css";

const navigation = (props) => {
    const somevalues = ["Welcome to Coding round", "Welcome to Funny Question Round" , "Congo!! Prakhar you made it, enjoy this video made solely for you"]
  return (
    <div className={classes.topnav}>
      <p>{somevalues[props.valueofpage-1]}</p>
    </div>
  );
};

export default navigation;
