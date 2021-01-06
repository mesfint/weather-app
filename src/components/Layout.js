import React from 'react';

import { Box, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from './Header';
import { Content } from './Content';
import { WeatherData } from './WeatherData';
import Footer from './Footer';
import { SearchWeather } from './SearchWeather';

const useStyles = makeStyles({
  mainContainer: {
    width: '100vw',
    height: '100vh',
  },
  content: {},
});

export const Layout = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainContainer} component="div">
        <Header />

        {/*   <SearchWeather /> */}
        {/* <WeatherData /> */}

        <Footer />
      </Box>
    </>
  );
};
