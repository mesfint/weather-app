import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { SearchByCity } from "./components/SearchByCity";

function App() {
  const [weather, setWeather] = useState([]);

  const api_key = "2a96281f39f9eedf2d609ea5729f954a";

  useEffect(() => {
    const getWeatherInfo = async () => {
      const res = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=${api_key}`
        )
        .then(function (res) {
          setWeather(res);
          console.log(res.data.weather[0].main);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };

    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="app">
        <h1>Weather App</h1>
        <SearchByCity />
      </div>
    </>
  );
}

export default App;
