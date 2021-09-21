import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button} from "@material-ui/core";

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
  createData("Arnab", "madmax"),
  createData("Raghav", "Telling stories about the lockdown"),
  createData("Sankalp", "sank"),
  createData("Gaurav", "gauv"),
  createData("Chaitanya", "chai"),
  createData("Vishwjeet", "vish"),
  createData("prakhar", "parkho"),
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
const Funny = (props) => {
  const classesforbutton = useStylesbase();
  const classes = useStyles();
  const [value ,setValue] = useState('');

  const handleChange= (event)=>{
    setValue(event.target.value);
  }

  const ans = '1a2b3c4d5e'
  return (
    <div style={{ textAlign: "center" }}>
      <h3 >Match the Following</h3>
      {/* Tell what the following person would be doing first when they reach
      college
      <pre>
        1) Arnab a) He would be wipind his ass off.
        <br />
        2) Raghav b) Telling story about lockdown{" "}
      </pre> */}
      <div style={{width:'60%',marginLeft:'20%'}}>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Person</StyledTableCell>
              <StyledTableCell align="right">What he would be doing?</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
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
  );
};

export default Funny;
