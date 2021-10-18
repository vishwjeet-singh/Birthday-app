import React from "react";
import classes from "../Navigation/Navigation.module.css";
import Typewriter from "typewriter-effect";

const navigation = () => {
  return (
    <div className={classes.topnav}>
      {/* <Typewriter
        options={{
            strings: ['Hello', 'World'],
            autoStart: true,
            loop: true,
        }}
        /> */}
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .typeString("Welcome to this new way of celebration")
            .pauseFor(100)
            .deleteAll()
            .typeString('You have surprise at end for which you need to pass <i>Fill characters round</i>')
            .pauseFor(500)
            .deleteChars(21)
            .typeString('<i>funny question round</i>')
            .pauseFor(500)
            .start();
        }}
        options={{
            autoStart: true,
            loop: true,
        }}
      />
    </div>
  );
};

export default navigation;
