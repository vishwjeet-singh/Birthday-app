import React, { useEffect, useState } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Vid from '../../Components/vid/vid';
import Nav from '../../Components/Navforrest/navforr';
import Coding from '../../Components/Codingques/Codingq';
import Funny from '../../Components/Funnyround/Funny';
import Birvid from '../../Components/BirthdayVideo/Birthdayvideo';
import Lastpage from '../../Components/Lastpage/Lastpage';
import Rick from '../../Components/Rick/Rick';
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
    const [go,setGo] = useState(true);
    const [page,setPage] = useState(0);
    const handlepagechange = ()=>{
        setPage(page+1);
    }
    const handleprevpage = ()=>{
        setPage(page-1);
    }

    const handlemovepage = ()=>{
      setGo(false);
    }
    useEffect(()=>{
      if(page < 4)
      setGo(true);
      else
      setGo(false);
    },[page])
    const colorofbutton = go===false?'#4caf50':null;
    return (
       
        <div>
            
            {page===0?<Navigation/>:null}
            {page===0?<Vid changed={handlepagechange}/>:null}

            {page>0 && page<5?<Nav valueofpage={page}/>:null}

            {page===1?<Coding movepage = {handlemovepage}/>:null}
            {page===2?<Funny movepage = {handlemovepage}/>:null}
            {page===3?<Rick movepage = {handlemovepage}/>:null}
            {page===4?<Birvid nextpage = {handlepagechange}/>:null}
            {page===5?<Lastpage/>:null}



            {page>0 && page<4?<Button
            className={classesforbutton.margin}
            variant="contained" color="success" size="medium" 
            style={{backgroundColor:colorofbutton, position:'absolute',bottom:'0',right:'0'}}
            onClick={handlepagechange} disabled={go}>Next Page</Button>:null}
            {page>0 && page<4?<Button
            variant="contained" size="medium" color="primary" className={classesforbutton.margin}
            style={{backgroundColor: '#4caf50',color:'black',position:'absolute',bottom:'0',right:'9%'}}
            onClick={handleprevpage}>Prev Page</Button>:null}
        </div>
    )
}
export default Contain;
//page>0 && page<4
//add this to the buttons when app is ready for production