import React from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  footerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    /*     background: '#1687a7', */

    fontSize: '15px',
    width: '100%',
    textAlign: 'center',
  },
  footer: {
    background: '#53d6bc',
    padding: '2%',
    color: '#fff',
  },
});

export const Footer = ({ image }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item lg={12} sm={12} className={classes.footer}>
        <Typography className={classes.footerStyle} variant="h6">
          designed and developed
          <FavoriteIcon style={{ color: '#9d65c9', fontSize: '15px' }} /> by
          MesfinT 2021
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
