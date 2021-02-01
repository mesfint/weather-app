import React from 'react';

import { Box, Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from './Header';
import { Content } from './Content';
import { WeatherData } from './WeatherData';
import Footer from './Footer';
import { SearchWeather } from './SearchWeather';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '50px 90px',
    margin: '0 auto',
    /* width: '100vw',
    height: '100vh', */
    /*    height: '600px',
    width: '100vw', */
    background: 'black',
    overflow: 'hidden',
    background:
      ' #C33764' /* fallback colour. Make sure this is just one solid colour. */,
    background:
      '-webkit-linear-gradient(rgba(29, 38, 113, 0.8),#2a3d66, url(../assets/cloud.jpeg)',
    background:
      'linear-gradient(rgba(29, 38, 113, 0.8),rgb(160, 69, 81)), url(../assets/cloud.jpeg)' /* The least supported option. */,
    overflowX: 'hidden',
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
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid lg={12} container spacing={2}>
          <Grid item lg={12} xs={12} sm={12} className={classes.items}>
            <Paper className={classes.paper}>
              {/* header section */}
              <Header />
            </Paper>
          </Grid>
          <Grid item lg={12} xs={12} sm={12} className={classes.items}>
            <Paper className={classes.paper}>
              {/* search input section */}
              <SearchWeather />
            </Paper>
          </Grid>

          <Grid item lg={12} xs={12} sm={12} className={classes.items}>
            <Paper className={classes.paper}>
              <Footer />{' '}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
