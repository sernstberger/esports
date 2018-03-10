import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
// import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";
import Typography from 'material-ui/Typography';

import styles from "./styles"

function Author(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <img src="https://source.unsplash.com/random/30x30" className={classes.authorImage} alt="author" />
      <Typography variant="caption">NameHere</Typography>
    </div>
  );
}

Author.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Author);