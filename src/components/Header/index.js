import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
// import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import styles from "./styles"

function Header(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        Twitter
        Twitch

        Login
        
        Home
        Features
        Teams
        {/* Merchandise */}

        Search
      </Card>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);