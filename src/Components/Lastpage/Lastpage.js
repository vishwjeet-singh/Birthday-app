import React from "react";
import classes from "./Lastpage.module.css";
import Typewriter from "typewriter-effect";
import Particles from 'react-particles-js';
import ReactPlayer from 'react-player';
const Last = () => {
  return (
    <React.Fragment>
      <div style={{position:'absolute',top:'0',left:'0',overflow:'hidden'}}>
        <Particles 
        width="100vw" 
        height="90vh"
        params={{
          particles:{
          number: {
            value: 400,
            density: {
              enable: true,
              value_area: 1500
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: 'grab'
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            }}
        }
      }
        }
        />
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

            .typeString("To the person whom I met recently and gave me chill vibes...")
            .pauseFor(100)
            .deleteAll()
            .typeString("A Very Happpppppy Birthday Apoorva")
            .typeString("<br/>-<strong>Vishwjeet Singh</strong>")
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
