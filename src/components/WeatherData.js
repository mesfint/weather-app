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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',

    /* display: 'flex',
    width: '80vw',
    padding: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    backgroundColor: 'rgba(0,0,0, 0.09)',
    boxShadow: '1687a7 rgba(0,0,0,0.75)', */
    /*   height: '60vh',
    maxWidth: '700px', 
    borderRadius: '15px',*/
  },

  iconStyle: {
    /*  background: '#c4c4c4', */
    /*  marginTop: '40px', */
    width: '30%',
    margin: '0 -17px',
  },

  /* card: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginRight: '1rem',
    padding: '1rem',
    borderRadius: '6px',
  }, */
  /*   cardDetail: {
    display: 'flex',
    flexDirection: 'column',
    width: '33.3%',
    marginRight: '1rem',
    padding: '1rem',
    borderRadius: '6px',
  }, */

  paper: {
    flex: 1,
    margin: '0 auto',

    /* flex: 1, */
    /* padding: '2px 5px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '80px',
    width: '90%', */
    /* marginTop: '13px', */
    /*  marginRight: '30px', */
    /*  lineHeight: '15px',
    flexWrap: 'wrap',
    background: '#edf1f1',
    borderRadius: '15px', */
    background: '#edf1f1',
    border: '1px solid #edf1cd',
  },
  bigPaper: {
    flex: 1,
    margin: '0 auto',
    /* flex: 1,
    justifyContent: 'center',
    alignItems: 'center', */
    background: '#9d65c9',
    border: '1px solid #edf1cd',
    /*   padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

    width: '95%',
    marginRight: '20px',
    height: 'auto',
    margin: '0 auto',
    marginTop: '20px',
    background: '#edf1f1',
    borderRadius: '15px', */
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
    color: 'rgb(160, 69, 81)',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: '600',
    fontSize: '1.5rem',
    /*  marginBottom: '-1rem', */
  },
  tempDetailsBlack: {
    color: '#000',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: '600',
    fontSize: '1.5rem',
    color: '#fff',
    /*  marginBottom: '-1rem', */
  },
  description: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: '600',
    fontSize: '2rem',
    textTransform: 'capitalize',
    marginTop: '20px',
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
    fontWeight: '500',
    fontSize: '1.2rem',
    textAlign: 'center',
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
  searchError,
}) => {
  const [unit, setUnit] = useState(temp);
  const [show, setSHow] = useState(true);
  const [black, setBlack] = useState(false);
  const classes = useStyles();

  const flag = ` https://www.countryflags.io/${country}/flat/64.png`;

  const handleShow = () => {
    setSHow(!show);
    setBlack(!black);
  };

  return (
    <>
      <div className={classes.root}>
        <Grid item container spacing={2}>
          <Grid item lg={6} xs={12} sm={6}>
            <Paper className={classes.bigPaper}>
              <div>
                <h4
                  className={
                    black ? classes.tempDetailsBlack : classes.tempDegree
                  }
                  onClick={handleShow}
                >
                  {/*  {show ? '°F' : '°C'} */}
                  °F
                </h4>
                <h4
                  className={
                    black ? classes.tempDetailsBlack : classes.tempDegree
                  }
                  onClick={handleShow}
                >
                  °C
                </h4>
              </div>
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
              {/*    {searchError && <h2>{searchError}</h2>} */}
            </Paper>
          </Grid>

          <Grid item lg={6} item container xs={12} sm={6}>
            <Paper className={classes.bigPaper}>
              <img
                className={classes.iconStyle}
                src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
                alt="weather images"
              ></img>
              <Typography variant="h6" className={classes.description}>
                {description}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid item container spacing={2}>
          <Grid item lg={3} xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h4 className={classes.tempDetails}>Humidity </h4>
              <h4 className={classes.tempNumbers}>{humidity} %</h4>
            </Paper>
          </Grid>
          <Grid item lg={3} xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h4 className={classes.tempDetails}> Wind </h4>
              <h4 className={classes.tempNumbers}>{wind} m/s</h4>
            </Paper>
          </Grid>
          <Grid item lg={3} xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h4 className={classes.tempDetails}> Pressure </h4>{' '}
              <h4 className={classes.tempNumbers}> {pressure}mb</h4>
            </Paper>
          </Grid>
          <Grid item lg={3} xs={12} sm={6}>
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
