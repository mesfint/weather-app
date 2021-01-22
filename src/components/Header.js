import React, { useState } from 'react';
import { SearchWeather } from './SearchWeather';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  mainContainer: {
    background: '#b1d4e7',
    textAlign: 'center',
    border: 'transparent',
    padding: '2rem 3rem',
  },
  title: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: '600',
    fontSize: '2rem',
    textTransform: 'capitalize',
    marginTop: '-10px',
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.mainContainer} component="header">
              <Typography className={classes.title}>Current Weather</Typography>

              <SearchWeather />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
