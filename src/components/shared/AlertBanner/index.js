import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
// import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import styles from "./styles"

function AlertBanner(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            Breaking News
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

AlertBanner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlertBanner);