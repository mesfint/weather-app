import React, { useState } from "react";

import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "./Header";
import Footer from "./Footer";
import { SearchWeather } from "./SearchWeather";

const useStyles = makeStyles((theme) => ({
  root: {
    /*  padding: '50px 90px', */
    margin: "0 auto",
    overflow: "hidden",
  },
  items: {
    objectFit: "cover",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const Layout = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Grid lg={12} container spacing={2}>
          <Grid item lg={12} xs={12} className={classes.items}>
            <Paper className={classes.paper}>
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
              <Footer />{" "}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
