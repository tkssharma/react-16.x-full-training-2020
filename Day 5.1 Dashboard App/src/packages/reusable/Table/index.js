import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
});

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData('Job Received', 159),
  createData('Job Cancelled', 237),
  createData('Job Received', 159),
  createData('Job Cancelled', 237),
  createData('Job Received', 159),
  createData('Job Cancelled', 237),
];

export default function SimpleTable() {
  const classes = useStyles({
    minHeight: 400,
  });

  return (
    <TableContainer component={Paper}>
      <Table
        aria-label="simple table"
        className={classes.table}
      >
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell align="right">Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
