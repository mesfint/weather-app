import React, { useState } from 'react';
import { SearchWeather } from './SearchWeather';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainContainer: {
    background: '#b1d4e7',
    textAlign: 'center',
    border: 'transparent',
    padding: '2rem 3rem',
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainContainer} component="header">
        <Typography className="title">Current Weather</Typography>
        {/* Input form */}
        <SearchWeather />
      </div>
    </>
  );
};
