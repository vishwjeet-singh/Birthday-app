import React from 'react';
import ReactPlayer from 'react-player';
import classes from '../vid/vid.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));  
const Vid = ()=>{
    const classesforbutton = useStyles();
    return (
        <div className={classes.thebox}>
            <ReactPlayer
             url='https://youtu.be/_MNvO7Z26YY' 
             
             controls={false}
             width={'100%'}
             height={'100vh'}
             playing={true}
             loop={true}
             muted={true}
             style={{left: 0}}
             />
             <div
             style={{position: 'absolute',bottom:0, right: 0,minWidth: 200}}
             >
               <Button variant="contained" size="large" color="primary" className={classesforbutton.margin}
               style={{backgroundColor: '#4caf50',color:'black'}}
               >
                Lets get started
                </Button>
             </div>
            
        </div>
    )
}
export default Vid;