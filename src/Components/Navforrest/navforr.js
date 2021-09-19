import React from "react";
import classes from "../Navforrest/navforr.module.css";

const navigation = (props) => {
    const somevalues = ["Coding round", "Funny Question Round" , "Meme Round"]
  return (
    <div className={classes.topnav}>
      <p>Welcome to {somevalues[props.valueofpage-1]}</p>
    </div>
  );
};

export default navigation;
