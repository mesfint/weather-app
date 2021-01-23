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
import errorImage from '../assets/directions.png';

const useStyles = makeStyles((theme) => ({
  citySearchInput: {
    width: '35ch',
    fontSize: '1.2rem',
    outlined: 'none',
  },
  errorSearch: {
    border: '2px solid red',
    outline: 'none',
    fontSize: '1.2rem',
  },
  alert: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    marginTop: '1rem',
    marginBottom: '1rem',
    margin: '0 auto',
  },
}));

export const SearchWeather = () => {
  const classes = useStyles();

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState('');
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
      handleValidSearchTerm();
    }
  };
  useEffect(() => {
    setWeather(weather);
  }, []);

  const handleValidSearchTerm = () => {
    let validSearch = false;

    if (search.length === 0) {
      setSearchError('City or country name is required');
    } else if (search.length < 2) {
      setSearchError('City or country name  should be minimum 3 characters');
    } else {
      setSearchError('');
      validSearch = true;
    }
    if (validSearch) {
      setSearchError('Please write correct city or country name');
    }
    setSearch('');
  };

  return (
    <>
      <form onSubmit={getWeatherInfo} className="form">
        <TextField
          className={
            searchError ? classes.errorSearch : classes.citySearchInput
          }
          type="text"
          placeholder="write city or country name..."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
        />
      </form>

      {searchError ? (
        <div>
          <Alert variant="filled" severity="error" className={classes.alert}>
            <h2>{searchError}</h2>
          </Alert>

          <img alt="image" src={errorImage} />
        </div>
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
          searchError={searchError}
        />
      )}
    </>
  );
};
