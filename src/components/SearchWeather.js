import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import { WeatherData } from './WeatherData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '45ch',
    borderRadius: '30px',
  },
  spinner: {
    position: 'absolute',
    left: '50%',
    top: '50%',
  },
  citySearchInput: {
    border: 'none',
    outline: 'none',
    boxSizing: ' border-box',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '9px',
    padding: '10px 30px',
    width: '350px',
    height: '52px',
    fontSize: '1.2rem',
  },
  error: {
    color: 'white',
    background: '#180605',
    width: '22%',
    margin: '0 auto',
  },
}));

export const SearchWeather = () => {
  const classes = useStyles();

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [weather, setWeather] = useState({
    city: 'Espoo',
    country: 'FI',
    temp: '-1',
    min: '-1',
    max: '-3',
    pressure: '1000',
    humidity: '10',
    description: 'snow',
    icon: '13n',
    wind: '200',
    visibility: '100',
  });

  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

  const getWeatherInfo = async (e) => {
    setIsLoading(true);
    try {
      e.preventDefault();
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`
        )

        .then((res) => {
          setWeather({
            city: res.data.name,
            country: res.data.sys.country,
            temp: Math.round(res.data.main.temp),
            pressure: res.data.main.pressure,
            humidity: res.data.main.humidity,
            description: res.data.weather[0].description,
            icon: res.data.weather[0].icon,
            wind: res.data.wind.speed,
            visibility: res.data.visibility,
            dt: res.data.dt,
            timezone: res.data.timezone,
          });
          setIsLoading(false);
          setSearch('');
        });
    } catch (error) {
      setIsError(true);
    }
  };
  useEffect(() => {
    setWeather(weather);
  }, []);

  return (
    <>
      <form onSubmit={getWeatherInfo} className="form">
        <input
          className={classes.citySearchInput}
          type="text"
          placeholder="write city name..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  onClick={(e) => getWeatherInfo(e)}
                  style={{ cursor: 'pointer' }}
                />
              </InputAdornment>
            ),
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {isError ? (
        <Alert className={classes.error} severity="error">
          There is no City name
        </Alert>
      ) : isLoading ? (
        <div className={classes.root}>
          <CircularProgress disableShrink className={classes.spinner} />
        </div>
      ) : (
        <WeatherData
          city={weather.city}
          country={weather.country}
          temp={weather.temp}
          min={weather.min}
          max={weather.max}
          pressure={weather.pressure}
          humidity={weather.humidity}
          description={weather.description}
          icon={weather.icon}
          wind={weather.wind}
          visibility={weather.visibility}
          dt={weather.dt}
          timezone={weather.timezone}
        />
      )}
    </>
  );
};
