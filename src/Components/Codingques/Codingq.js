import { Button ,makeStyles} from "@material-ui/core";
import React, {  useState } from "react";
import classes from "./Codingq.module.css";
import { fadeIn } from 'react-animations';
import Radium,{StyleRoot} from 'radium';
const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
  const styles = {
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }
const Coding = (props) => {
    const classesforbutton = useStyles();

    const [value,setValue] = useState('');

    const [reqtestcase , setReqtestcase] = useState(false);
    const handleChange = (event)=>{
        setValue(event.target.value);
    }
    

    const ans = '265-1590270';

    const handlereqtestcase = ()=>{
      if(reqtestcase===false){
        setReqtestcase(true);
      }
      else
        setReqtestcase(false);
    }

    const testcases = ['31 1300 3','6 30 3','400 89000 20','120 10000 7'];
  return (
    <StyleRoot>
    <div className={classes.box} style={styles.fadeIn}>
      <p style={{marginBottom:'0px'}}>
      The year is 2069, Chaitanya wants to celebrate by getting the gang back together. So he kidnaps DostLog using chloroform.
      Unfortunately, he is unable to kidnap Vishwjeet as he works in a huge company on floor number x. Chaitanya is currently at the 0th floor with n ml of chloroform and also needs to take down the guards using the chloroform (It takes 1 ml to take down 1 guard). Every ith floor contains i number of guards. However, Vishwjeet is smart, he moves up a floor after he hears Chaitanya has taken down k number of floors. Will Chaitanya have enough chloroform to kidnap Vishwjeet?
      <br/>
      NOTE - If Chaitanya reaches the same floor as Vishwjeet, he has to take down all the gaurds of that floor and vishwjeet himself
      </p>
      <strong>Quick Note</strong>
      <br />
      <strong>
        First, You need to code in your fav ide and Run required test cases and take the corresponding output write in the
        input below one after other without spaces.
      </strong>
      <p style={{marginTop:'0',marginBottom:'0'}}>
        <strong>Input Format</strong><br/>
        First line will be the number of test cases.
        The second line contains x (Vishwjeet’s initial floor), n (Chaitanya’s initial chloroform amount) and k (number of floors Chaitanya takes down to prompt Vishwjeet to move 1 floor up).
      </p>
      <p style={{marginTop:'0',marginBottom:'0'}}>
        <strong>Output Format</strong><br/>
        Print the amount of chloroform remaining after used on Vishwjeet if Chaitanya will have enough chloroform for Vishwjeet. Print -1 if Chaitanya will not have enough chloroform for Vishwjeet.
      </p>
      {reqtestcase===false?<strong>Sample test cases</strong>:<strong>Req. test cases, run this one</strong>}
      <Button onClick={handlereqtestcase} size="small" color="secondary">{reqtestcase===false?'Get Req. test cases':'Get Sample test case'}</Button>
      <br />
      <strong>Input</strong>
      {reqtestcase===false?<p style={{marginBottom:'0px',marginTop:'0px'}}>
        1
        <br />
        7 40 4
      </p>:null}
      {reqtestcase===true?<p style={{marginBottom:'0px',marginTop:'0px'}}>
        3
        <br />
        {testcases[0]}
        <br />
        {testcases[1]}
        <br />
        {testcases[2]}
        <br />
        {testcases[3]}
      </p>:null}
      {reqtestcase===false?<strong>Output</strong>:null}
      {reqtestcase===false?<p style={{marginBottom:'0px',marginTop:'0px'}}>
        3
      </p>:null}
      <strong>Type your output here</strong>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      <form>
        <label>
          <input
            type="text"
            value = {value}
            onChange={handleChange}
          />
        </label>
        <Button 
        variant="contained" color="primary" className={classesforbutton.margin}
        style={{backgroundColor: '#4caf50',color:'black'}}
        size="small" onClick={ans===value?props.movepage:null}>Submit</Button>
      </form>
      {value?<span >Your answer : {value}</span>:null}
      {value?value===ans?<span style={{marginLeft:'45px',color:'green'}}>Next Page Access granted just click submit</span>:<span style={{marginLeft:'45px',color:'red'}}>Access Denied</span>:null}
      </div>
    </div>
    </StyleRoot>
  );
};

export default Coding;
