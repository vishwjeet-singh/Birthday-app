import { Button ,makeStyles} from "@material-ui/core";
import React, {  useState } from "react";
import classes from "./Codingq.module.css";
const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
const Coding = (props) => {
    const classesforbutton = useStyles();

    const [value,setValue] = useState('');

    const [reqtestcase , setReqtestcase] = useState(false);
    const handleChange = (event)=>{
        setValue(event.target.value);
    }
    

    const ans = '34568';
    const handlereqtestcase = ()=>{
      if(reqtestcase===false){
        setReqtestcase(true);
      }
      else
        setReqtestcase(false);
    }

    const testcases = ['3 4 5 6 7','5 6 7 8 9','3 4 5 7 0','1 2 3 4 5','3 4 5 6 7 8'];
  return (
    <div className={classes.box}>
      <p style={{marginBottom:'0px'}}>
      The year is 2069, Chaitanya wants to celebrate by getting the gang back together. So he kidnaps DostLog using chloroform.
        Unfortunately, he is unable to kidnap Vishwjeet as he works in a huge company on floor number x. Chaitanya is currently at the ground floor with n ml of chloroform and also needs to take down the guards using the chloroform (it takes 1 ml to take down 1 guard). Every ith floor contains i guards. However, Vishwjeet is smart, he moves up a floor after he hears Chaitanya has taken down k number of floors. Will Chaitanya make it in time to kidnap Vishwjeet?
      </p>
      <strong>Quick Note</strong>
      <br />
      <strong>
        First, You need to code in your fav ide and Run required test cases and take the corresponding output write in the
        input below one after other without spaces.
      </strong>
      <br />
      <br />
      {reqtestcase===false?<strong>Some example test cases</strong>:<strong>Req. test cases, run this one</strong>}
      <br />
      <strong>Input</strong>
      {reqtestcase===false?<p style={{marginBottom:'0px',marginTop:'0px'}}>
        2
        <br />
        3 5 6 7
        <br />
        6 7 8 9
      </p>:null}
      {reqtestcase===true?<p style={{marginBottom:'0px',marginTop:'0px'}}>
        5
        <br />
        {testcases[0]}
        <br />
        {testcases[1]}
        <br />
        {testcases[2]}
        <br />
        {testcases[3]}
        <br />
        {testcases[4]}
      </p>:null}
      {reqtestcase===false?<strong>Output</strong>:null}
      {reqtestcase===false?<p style={{marginBottom:'0px',marginTop:'0px'}}>
        3
        <br />6
      </p>:null}
        <Button onClick={handlereqtestcase} color="secondary">{reqtestcase===false?'Req. test cases':'Sample test cases'}</Button>
        <br/>
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
  );
};

export default Coding;
