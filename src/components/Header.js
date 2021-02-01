import React, { useState } from 'react';
import { SearchWeather } from './SearchWeather';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  mainContainer: {
    background: '#b14e7' /* #d3e0ea */,
    textAlign: 'center',
    border: 'transparent',
    padding: '2rem 3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: '600',
    fontSize: '2rem',
    textTransform: 'capitalize',
    marginBottom: '2rem',
    paddingBottom: '3rem',
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={12}>
        <div className={classes.mainContainer} component="header">
          <Typography className={classes.title}>Current Weather</Typography>
        </div>
      </Grid>
    </>
  );
};
