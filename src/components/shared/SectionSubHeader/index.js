import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import Button from "material-ui/Button";
// import Card, { CardActions, CardContent } from 'material-ui/Card';
import { CardContent } from 'material-ui/Card';
// import Grid from "material-ui/Grid";
import Typography from 'material-ui/Typography';

import styles from "./styles"

function SectionSubHeader(props) {
  const { classes, title, buttonTitle, link } = props;
  return (
    <CardContent className={classes.SectionSubHeader}>
      <Typography variant="caption" component="h6">
        {title}
      </Typography>
    </CardContent>
  );
}

SectionSubHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(SectionSubHeader);