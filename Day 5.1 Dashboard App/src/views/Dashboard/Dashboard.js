import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import TableContainer from '../../packages/reusable/Table';
import ChartContainer from '../../packages/reusable/PieChart';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={6}
          md={12}
          xl={6}
          xs={12}
        >
          <ChartContainer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
