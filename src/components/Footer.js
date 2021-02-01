import React from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  footerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    fontSize: '15px',
    width: '100%',
    textAlign: 'center',
  },
});

export const Footer = ({ image }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={12}>
        <Typography className={classes.footerStyle} variant="h6">
          Designed and developed with{' '}
          <FavoriteIcon style={{ color: '#53d6bc', fontSize: '15px' }} /> by
          MesfinT, Jan-2021
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
