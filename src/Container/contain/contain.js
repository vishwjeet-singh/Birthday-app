import React, { useState } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Vid from '../../Components/vid/vid';
const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));  
const Contain = ()=>{
    const classesforbutton = useStyles();
    const [page,setPage] = useState(0);
    const handlepagechange = ()=>{
        setPage(page+1);
    }
    const handleprevpage = ()=>{
        setPage(page-1);
    }
    console.log(page);
    return (
       
        <div>
            <Navigation/>
            {page===0?<Vid changed={handlepagechange}/>:null}


            
            {page!==0?<Button
            variant="contained" size="large" color="primary" className={classesforbutton.margin}
            style={{backgroundColor: '#4caf50',color:'black',position:'absolute',bottom:'0',right:'0'}}
            onClick={handlepagechange}>Next Page</Button>:null}
            {page!==0?<Button
            variant="contained" size="large" color="primary" className={classesforbutton.margin}
            style={{backgroundColor: '#4caf50',color:'black',position:'absolute',bottom:'0',left:'0'}}
            onClick={handleprevpage}>Prev Page</Button>:null}
        </div>
    )
}
export default Contain;