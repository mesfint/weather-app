import React, { useState } from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
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
    overflow: 'hidden',
  },
  weatherData: {
    width: '80%',
    height: 'auto',
    /* border: "1px solid #000", */
    margin: '1rem auto',
    padding: '1rem 2rem',
  },
  iconStyle: {
    marginTop: '-15px',
  },

  grid: {
    width: '100%',
    margin: 0,
  },
  min: {
    display: 'flex',
    flexDirection: 'column',
    color: '#141414',
    textAlign: 'right',
    fontSize: '1.5rem',
    position: 'fixed',
    top: '140px',
    left: '330px',
    justifyContent: 'right',
  },
  max: {
    display: 'flex',
    flexDirection: 'column',
    color: '#141414',
    textAlign: 'right',
    fontSize: '1.5rem',
    position: 'fixed',
    top: '170px',
    left: '330px',
    justifyContent: 'right',
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
  error,
}) => {
  const [unit, setUnit] = useState(temp);
  const classes = useStyles();

  const date = new Date();
  const flag = ` https://www.countryflags.io/${country}/flat/64.png`;

  const convertTempUnitToFahrenheit = () => {
    return setUnit(temp * 1.8 + 32);
  };
  const convertTempUnitToCelsius = () => {
    return setUnit(temp);
  };

  return (
    <>
      {`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`}

      <Box className={classes.container} component="div">
        <Typography variant="h3" component="h3" gutterBottom>
          <span>
            {' '}
            {city},{country}
            <img className={classes.flag} src={flag} alt={country}></img>
          </span>
        </Typography>

        <Box className={classes.weatherData} component="div">
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <Typography
                  variant="h2"
                  component="h2"
                  style={{ textAlign: 'left' }}
                >
                  {unit}°<sup style={{ fontSize: '45px', color: '#000' }}></sup>
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                {/*  <CloudQueueIcon className={classes.iconStyle} /> */}
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
                  <Typography
                    style={{
                      margin: '5px',
                      padding: '5px',
                    }}
                  >
                    <button
                      onClick={() => {
                        convertTempUnitToCelsius();
                      }}
                    >
                      °C
                    </button>{' '}
                    <button
                      onClick={() => {
                        convertTempUnitToFahrenheit();
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

        <Box component="div">
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>Humidity: {humidity}</Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>Wind: {wind} m/s</Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>Pressure: {pressure}</Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>Visibility: {visibility}m</Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
