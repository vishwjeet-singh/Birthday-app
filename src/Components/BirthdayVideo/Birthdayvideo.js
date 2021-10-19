import React from 'react';
import ReactPlayer from 'react-player';
import classes from './Birthdayvideo.module.css';
import { fadeIn } from 'react-animations';
import Radium,{StyleRoot} from 'radium';
const Vid = (props)=>{
    const styles = {
        fadeIn: {
          animation: 'x 1s',
          animationName: Radium.keyframes(fadeIn, 'fadeIn')
        }
      }
    return (
        <StyleRoot>
        <div className={classes.thebox} style={styles.fadeIn}>
            <ReactPlayer
             url='https://youtu.be/6My_EoeZXh8' 
             onEnded={props.nextpage}
             controls={false}
             width={'100%'}
             height={'102%'}
             playing={true}
             style={{left: 0}}
             />
             <div
             style={{position: 'absolute',bottom:0, right: 0,minWidth: 200}}
             >
             </div>
            
        </div>
        </StyleRoot>
    )
}
export default Vid;