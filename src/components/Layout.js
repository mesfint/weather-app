import React, { useState } from 'react';

import { Box, Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from './Header';
import { Content } from './Content';
import { WeatherData } from './WeatherData';
import Footer from './Footer';
import { SearchWeather } from './SearchWeather';

const useStyles = makeStyles((theme) => ({
  root: {
    /*  padding: '50px 90px', */
    margin: '0 auto',
    overflow: 'hidden',
  },
  items: {
    objectFit: 'cover',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const Layout = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const classes = useStyles();
  return (
    <>
      <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
        <Grid lg={12} container spacing={2}>
          <Grid item lg={12} xs={12} className={classes.items}>
            <Paper className={classes.paper}>
              {/* header section */}
              <button
                onClick={() => {
                  setDarkTheme((prevTheme) => !prevTheme);
                }}
              >
                Dark / Light
              </button>
              <Header />
            </Paper>
          </Grid>
          <Grid item lg={12} sm={12} className={classes.items}>
            <Paper className={classes.paper}>
              {/* search input section */}
              <SearchWeather />
            </Paper>
          </Grid>

          <Grid item lg={12} sm={12} className={classes.items}>
            <Paper className={classes.paper}>
              <Footer />{' '}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
