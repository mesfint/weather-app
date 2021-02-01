import React from 'react';
import { Typography, Box } from '@material-ui/core';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { WeatherData } from './WeatherData';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    height: '75vh',
    boxShadow: '0px 13px 40px -13px rgba(0,0,0,0.75)',
    width: '70%',
    margin: '0 auto',
    position: 'absolute',
    top: '63%',
    left: '50%',
    padding: '1rem 2rem',
    transform: 'translate(-50%, -50%)',
    borderRadius: '3px',
    overflow: 'hidden',
    background: 'red',
  },
  weatherData: {
    width: '100%',
    height: 'auto',
    border: '1px solid #000',
    margin: '1rem auto',
    padding: '1rem 2rem',
  },
  iconStyle: {
    padding: '20px',
    fontSize: '105px',
  },
  /*   gridStyles: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(4),
  }, */
  grid: {
    width: '100%',
    margin: 0,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: '1px solid red',
    background: 'transparent',
  },
}));

export const Content = () => {
  const classes = useStyles();
  return (
    <>
      <WeatherData />
    </>
  );
};
