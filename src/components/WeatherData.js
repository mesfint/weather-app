import React, { useState } from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {
  convertTempUnitToFahrenheit,
  convertTempUnitToCelsius,
  getDate,
  getLocalTime,
} from '../utils';

/* const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})); */

const useStyles = makeStyles((theme) => ({
  container: {
    /* display: 'flex', */
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    padding: '34px',
    backgroundImage: 'url(bgImage)',
    marginTop: '55px',
    backgroundColor: 'rgba(0,0,0, 0.09)',
    boxShadow: '0px 13px 40px -13px rgba(0,0,0,0.75)',

    height: '60vh',
    maxWidth: '700px',
    borderRadius: '15px',
  },
  iconStyle: {
    background: '#c4c4c4',
  },

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 'auto',
    marginTop: '20px',
    background: '#edf1f1',
    borderRadius: '15px',
  },
  flag: {
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-25px',
    marginBottom: '-20px',
  },
  tempDegree: {
    height: '35px',
    width: ' 35px',
    color: '#fff',

    marginLeft: '35%',
    marginBottom: '-2%',
    fontSize: '1.3rem',
    paddingTop: '5px',
    borderRadius: '50%',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53d6bc',
    cursor: 'pointer',
  },
  tempDetails: {
    color: '#53d6bc',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: '600',
    fontSize: '1.5rem',
    marginBottom: '-1rem',
  },
  country: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: '600',
    fontSize: '2rem',
    textTransform: 'capitalize',
    marginTop: '-10px',
  },
  tempNumbers: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: '600',
    fontSize: '1.2rem',
  },
  timeDate: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: '500',
    fontSize: '1.2rem',
  },
}));

export const WeatherData = ({
  city,
  country,
  temp,
  pressure,
  humidity,
  description,
  icon,
  wind,
  visibility,
  timezone,
  dt,
  error,
}) => {
  const [unit, setUnit] = useState(temp);
  const [show, setSHow] = useState(true);
  const classes = useStyles();

  const flag = ` https://www.countryflags.io/${country}/flat/64.png`;
  const handleShow = () => {
    setSHow(!show);
  };

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h4 className={classes.tempDegree} onClick={handleShow}>
                {show ? '°F' : '°C'}
              </h4>
              <Typography variant="h1" component="h1" className={classes.unit}>
                {show
                  ? convertTempUnitToCelsius(unit)
                  : convertTempUnitToFahrenheit(unit)}
                °
              </Typography>
              <h2 className={classes.country}>
                {city},{country}
              </h2>
              <img className={classes.flag} src={flag} alt={country}></img>{' '}
              <h4 className={classes.timeDate}>
                {' '}
                {timezone
                  ? getDate(dt) + ' ' + getLocalTime(timezone)
                  : '00:00'}
              </h4>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <img
                className={classes.iconStyle}
                src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
                alt="weather images"
              ></img>
              <Typography variant="h6" className={classes.country}>
                {description}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <h4 className={classes.tempDetails}>Humidity </h4>
              <h4 className={classes.tempNumbers}>{humidity} %</h4>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <h4 className={classes.tempDetails}> Wind </h4>
              <h4 className={classes.tempNumbers}>{wind} m/s</h4>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <h4 className={classes.tempDetails}> Pressure </h4>{' '}
              <h4 className={classes.tempNumbers}> {pressure}mb</h4>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              {' '}
              <h4 className={classes.tempDetails}> Visibility </h4>{' '}
              <h4 className={classes.tempNumbers}> {visibility}m</h4>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
