import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from "material-ui/Button";
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Grid from "material-ui/Grid";
import Typography from 'material-ui/Typography';

import styles from "./styles"

function SectionHeader(props) {
  const { classes, title, buttonTitle, link } = props;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className={classes.sectionHeader}>
          <CardContent className={classes.foooooo}>
            <Typography variant="title" component="h2">
              {title}
            </Typography>
            <Button variant="raised" size="small">{buttonTitle}</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

SectionHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default withStyles(styles)(SectionHeader);