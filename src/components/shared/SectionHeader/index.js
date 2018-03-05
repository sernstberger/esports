import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from "material-ui/Button";
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";
// import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import styles from "./styles"

function SectionHeader(props) {
  const { classes } = props;
  return (
    <div>

          <Card className={classes.sectionHeader}>
            <CardContent>
              <Grid container>
                <Grid item className={classes.foooooo}>
                  <Typography variant="title" component="h2">
                    Latest News Articles
                  </Typography>
                </Grid>
              
                <Grid item xs={12} sm={9}>
                  <Button variant="raised" size="small">Browse All News</Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

    </div>
  );
}

SectionHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SectionHeader);