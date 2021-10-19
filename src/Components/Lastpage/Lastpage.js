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

            .typeString("To the person who have this and also likes this <br> string s;cin>>s;<br>string newstring=''''; <br> for(int i=s.length()-1;i>-1;i--) <br> newstring += s[i]; <br> if(s==newstring) <br> palindrome")
            .pauseFor(100)
            .deleteAll()
            .typeString("Happy Birthday Gaurav Sharma")
            .deleteChars(6)
            .typeString("Arora")
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
