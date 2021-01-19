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
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundImage: 'url(bgImage)',
    marginTop: '55px',
    backgroundColor: 'rgba(0,0,0, 0.09)',
    boxShadow: '0px 13px 40px -13px rgba(0,0,0,0.75)',
    width: '70%',
    height: '60vh',
    maxWidth: '700px',
    borderRadius: '15px',
  },
  /* weatherData: {
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

    position: 'absolute',
    top: '4rem',
    left: '24rem',
    fontSize: '2rem',
    paddingLeft: '.2rem',
  },
  time: {
    color: 'rgba(0,0,0, 0.5)',
    fontSize: '1.3rem',
  }, */
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
    <div>
      <div className={classes.container}>
        <div className="basicWeatherInfo">
          <div className="item1">
            <Typography variant="h1" component="h1" className="unit">
              {unit}°
            </Typography>

            <div className="countryNameFlag">
              <h2>
                {city},{country}
              </h2>

              <img className={classes.flag} src={flag} alt={country}></img>
            </div>
            <span className="time">
              {' '}
              {timezone ? getDate(dt) + ' ' + getLocalTime(timezone) : '00:00'}
            </span>
          </div>
          {/* end of 1st div */}

          <div className="item2">
            <img
              className={classes.iconStyle}
              src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
              alt="weather images"
            ></img>
            <Typography variant="h6">{description}</Typography>
          </div>
        </div>

        {/*  <div>
          <p
            onClick={() => {
              setUnit(convertTempUnitToCelsius(temp));
            }}
            style={{ cursor: 'pointer' }}
          >
            °C
          </p>{' '}
          <p
            onClick={() => {
              setUnit(convertTempUnitToFahrenheit(temp));
            }}
            style={{ cursor: 'pointer' }}
          >
            °F
          </p>{' '}
        </div> */}

        <div className="weatherDataDetails">
          <div>
            <h4>Humidity |</h4>
            <h4>{humidity}</h4>
          </div>
          <div>
            <h4> Wind | </h4>
            <h4>{wind} m/s</h4>
          </div>
          <div>
            <h4> Pressure | </h4> <h4> {pressure}</h4>
          </div>
          <div>
            <h4> Visibility </h4> <h4> {visibility}m</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
