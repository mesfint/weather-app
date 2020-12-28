import React from "react";

export const WeatherData = ({
  weather,
  name,
  country,
  description,
  wind,
  visibility,
  convertToFahrenheit,
  convertToCelsius,
  toggleTemp,
  setToggleTemp,
}) => {
  const { temp, humidity, pressure } = weather;
  const date = new Date();

  return (
    <>
      <div className="cityContainer">
        <div className="cityName">
          <h1 className="city">
            {" "}
            {name},{country}
          </h1>
        </div>
        <div className="cityDate">
          <span className="date">
            {`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`}
          </span>
        </div>
      </div>

      <div className="tempContainer">
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/wn/${description.icon}@2x.png`}
            alt="weather images"
          ></img>
        </div>
        <span className="temp">
          {toggleTemp
            ? Math.round(temp) + "°c"
            : Math.round((9 / 5) * temp + 32) + "°F"}
        </span>
        <p className="desc">{description.description}</p>
        <div className="tempType">
          <button
            className="celsius"
            onClick={() => setToggleTemp(!toggleTemp)}
          >
            C
          </button>
          <button
            className="fahrenheit"
            onClick={() => setToggleTemp(!toggleTemp)}
          >
            F
          </button>
        </div>
      </div>

      <div className="containerDetail">
        <div>
          <h1 className="detail">Details</h1>
          <p>Pressure</p>
          <p>{pressure}</p>
        </div>
        <div>
          <p>Humidity</p>
          <p>{humidity}</p>
        </div>
        <div>
          <p>Wind</p>
          <p>{wind} m/s</p>
        </div>
        <div>
          <p>Visibility</p>
          <p>{visibility}m</p>
        </div>
      </div>
    </>
  );
};
