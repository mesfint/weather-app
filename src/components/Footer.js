import React from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';

const useStyles = makeStyles({
  footerStyle: {
    position: 'fixed',
    left: 0,
    bottom: '15px',
    fontSize: '15px',
    width: '100%',
    textAlign: 'center',
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.footerStyle} variant="h6">
        Designed and developed with{' '}
        <FavoriteIcon style={{ color: 'red', fontSize: '15px' }} /> by MesfinT,
        Dec-2020
      </Typography>
    </>
  );
}

export default Footer;
