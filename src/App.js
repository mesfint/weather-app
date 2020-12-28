import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import "./App.css";
import axios from "axios";
import { SearchByCity } from "./components/SearchByCity";

import { WeatherData } from "./components/WeatherData";
import { Header } from "./components/Header";

const App = () => {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState([]);
  const [country, setCountry] = useState([]);
  const [description, setDescription] = useState("");
  const [wind, setWind] = useState([]);
  const [toggleTemp, setToggleTemp] = useState(false);
  const [visibility, setVisibility] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const getWeatherInfo = async (e) => {
    //const location = e.target.elements.location.value;
    e.preventDefault();
    const API_KEY = "2a96281f39f9eedf2d609ea5729f954a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}&units=metric`;
    const request = axios.get(url);
    const res = await request;
    setWeather(res.data.main);
    setCity(res.data.name);
    setCountry(res.data.sys.country);
    setDescription(res.data.weather[0]);
    setWind(res.data.wind.speed);
    setVisibility(res.data.visibility);
  };
  const convertToFahrenheit = () => {
    setToggleTemp(!toggleTemp);
  };

  console.log(weather);

  return (
    <div className="app">
      <SearchByCity
        getWeatherInfo={getWeatherInfo}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {weather && (
        <WeatherData
          weather={weather}
          name={city}
          country={country}
          description={description}
          wind={wind}
          visibility={visibility}
          convertToFahrenheit={convertToFahrenheit}
          toggleTemp={toggleTemp}
          setToggleTemp={setToggleTemp}
        />
      )}
    </div>
  );
};

export default App;
