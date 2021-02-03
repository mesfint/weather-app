import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Layout } from './components/Layout';

import { SearchWeather } from './components/SearchWeather';
import { WeatherData } from './components/WeatherData';

import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';

const App = () => {
  return (
    <>
      <div className="container">
        <Layout />
      </div>
    </>
  );
};

export default App;
