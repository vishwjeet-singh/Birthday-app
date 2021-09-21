import React from "react";
import classes from "./Lastpage.module.css";
import Typewriter from "typewriter-effect";
const Last = (props) => {
  return (
    <div className={classes.box}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .typeString("To the person who is backbone of <strong>Dost Log</strong> and also keeps all of us engaged in some kind of talks")
            .pauseFor(100)
            .deleteAll()
            .typeString(
              "To the person who is obsessed with letter <strong>P</strong> like Python and other one is the person you know ...."
            )
            .pauseFor(500)
            .deleteAll()
            .typeString("Happy Birthday Vikram Rathore")
            .deleteChars(14)
            .typeString("Prakhar Rathore")
            .typeString("<br/>-<strong>Dost Log</strong>")
            .start();
        }}
        options={{
          autoStart: true,
        }}
      />
    </div>
  );
};

export default Last;
