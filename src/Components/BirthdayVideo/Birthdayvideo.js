import React from 'react';
import ReactPlayer from 'react-player';
import classes from './Birthdayvideo.module.css';
const Vid = (props)=>{
    return (
        <div className={classes.thebox}>
            <ReactPlayer
             url='https://youtu.be/e6mRZjFpVME' 
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
    )
}
export default Vid;