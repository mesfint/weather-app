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

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    /*    border: '2px solid green', */
    textAlign: 'center',
    backgroundImage: 'url(bgImage)',
    height: '70vh',
    backgroundColor: 'rgba(0,0,0, 0.09)',
    boxShadow: '0px 13px 40px -13px rgba(0,0,0,0.75)',
    width: '70%',
    margin: '0 auto',
    position: 'absolute',
    top: '63%',
    left: '50%',
    padding: '1rem 2rem',
    transform: 'translate(-50%, -50%)',
    borderRadius: '3px',
    /* overflow: 'hidden', */
  },
  weatherData: {
    width: '65%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'right',

    margin: '-1rem auto',
    padding: '1rem 2.6rem',
  },
  iconStyle: {
    margin: '-30px',
    padding: 0,
  },

  grid: {
    width: '61.5%',
    justifyContent: 'left',
    alignItems: 'left',
    margin: '-.2rem auto',
    padding: '1rem 2rem',
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: '1px solid #018dc3',
    background: 'transparent',
  },
  flag: {
    margin: ' -1rem 3rem',
  },
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  time: {
    color: 'rgba(0,0,0, 0.5)',
    fontSize: '1.3rem',
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
  const classes = useStyles();

  const flag = ` https://www.countryflags.io/${country}/flat/64.png`;

  return (
    <>
      <div className={classes.time}>
        {timezone ? getDate(dt) + ' ' + getLocalTime(timezone) : '00:00'}
      </div>

      <Box className={classes.container} component="div">
        <Typography variant="h3" component="h3" gutterBottom>
          <span>
            {' '}
            {city},{country}
            <img className={classes.flag} src={flag} alt={country}></img>
          </span>
        </Typography>

        <Box component="div">
          <Grid container spacing={2} className={classes.weatherData}>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <Typography variant="h2" component="h2" className="unit">
                  {unit}°<sup></sup>
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <img
                  className={classes.iconStyle}
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="weather images"
                ></img>
                <Typography variant="h6">{description}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <div className={classes.toggleContainer}>
                  <Typography>
                    <button
                      onClick={() => {
                        setUnit(convertTempUnitToCelsius(temp));
                      }}
                    >
                      °C
                    </button>{' '}
                    <button
                      onClick={() => {
                        setUnit(convertTempUnitToFahrenheit(temp));
                      }}
                    >
                      °F
                    </button>{' '}
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box component="div" className="weatherDataDetails">
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12} md={4} spacing={3}>
              <Paper className={classes.paper}>Humidity: {humidity}</Paper>
            </Grid>
            <Grid item xs={12} md={4} spacing={3}>
              <Paper className={classes.paper}>Wind: {wind} m/s</Paper>
            </Grid>
            <Grid item xs={12} md={4} spacing={3}>
              <Paper className={classes.paper}>Pressure: {pressure}</Paper>
            </Grid>
            <Grid item xs={12} md={4} spacing={3}>
              <Paper className={classes.paper}>Visibility: {visibility}m</Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
