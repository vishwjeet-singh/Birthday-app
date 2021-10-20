import React, { useState } from "react";
import cclasses from './Funny.module.css'
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button} from "@material-ui/core";
import { zoomIn } from 'react-animations';
import Radium,{StyleRoot} from 'radium';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("1) Arnab", "a) Starts a business selling weapons."),
  createData("2) Raghav", "b) Plans a trip during all of this."),
  createData("3) Sankalp", "c) Long-ass story about how he once faced a zombie apocalypse in 6th grade."),
  createData("4) Gaurav", "d) Watches survival courses on youtube and pastes them on CV."),
  createData("5) Chaitanya", "e) Doesn’t care. Still goes to mess twice for one meal."),
  createData("6) Vishwjeet", "f) Gives up and joins zombies."),
  createData("7) Prakhar", "g) Dies first."),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const useStylesbase = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
  const styles = {
    zoomIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(zoomIn, 'zoomIn')
    }
  }
const Funny = (props) => {
  const classesforbutton = useStylesbase();
  const classes = useStyles();
  const [value ,setValue] = useState('');

  const handleChange= (event)=>{
    setValue(event.target.value);
  }

  const ans = '1g2c3d4e5f6b7a';
  return (
    <StyleRoot>
    <div className={cclasses.box} style={styles.zoomIn}>
      <h3 >Match the name of the person with the first thing they’ll do in a zombie apocalypse (we are all in college).</h3>
      <div style={{width:'65%',marginLeft:'20%'}}>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Person</StyledTableCell>
              <StyledTableCell style={{paddingLeft:'185px'}} align="left">What he would be doing?</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell style={{paddingLeft:'185px'}} align="left">{row.calories}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      <p>Type your answer below in the box: </p>
      <p><strong>You have to type answer without spaces one after other. For example if 1 answer is b and 2 answer is a. So the answer would be like 1b2a</strong></p>
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
      
      {value?<p><strong>Your answer is:</strong> {value}</p>:null}
    </div>
    </StyleRoot>
  );
};

export default Funny;
