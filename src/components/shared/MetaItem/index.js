import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
// import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";
import Typography from 'material-ui/Typography';

import styles from "./styles"

function MetaItem(props) {
  const { classes, icon, number } = props;
  return (
    <div className={classes.root}>
      <div className={classes.icon}>{icon}</div>
      <Typography variant="caption">{number}</Typography>
    </div>
  );
}

MetaItem.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.object.isRequired,
  number: PropTypes.number.isRequired,
};

export default withStyles(styles)(MetaItem);