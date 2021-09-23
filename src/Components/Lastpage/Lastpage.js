import React from "react";
import classes from "./Lastpage.module.css";
import Typewriter from "typewriter-effect";
import Particles from 'react-particles-js';
import ReactPlayer from 'react-player';
const Last = () => {
  return (
    <React.Fragment>
      <div style={{position:'absolute',top:'0',left:'0',overflow:'hidden'}}>
        <Particles width="100vw" height="90vh"/>
        <ReactPlayer
             url='https://www.youtube.com/watch?v=MU0Yp0qmYEs' 
             controls={false}
             playing={true}
             style={{display:'none'}}
             />
      </div>
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
            .typeString("Happy Birthday Rowdy Rathore")
            .deleteChars(13)
            .typeString("Prakhar Rathore")
            .typeString("<br/>-<strong>Dost Log</strong>")
            .start();
        }}
        options={{
          autoStart: true,
        }}
      />
    </div>
    </React.Fragment>
  );
};

export default Last;
