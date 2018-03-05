import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";
// import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import styles from "./styles"

function AlertBanner(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container justify="center" spacing={24}>
        <Grid item xs={12} md={10}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container>
                <Grid item className={classes.foooooo}>
                  <Typography variant="title" component="h2">
                    Breaking News
                  </Typography>
                </Grid>
              
                {/* <Chip label="XENOWATCH" /> */}
                <Grid item xs={12} sm={9}>
                  <Typography variant="subheading" component="h4">
                    SHADOW’S ABILITY WILL RECEIVE A NERF ON MAY 6TH
                  </Typography>
                  <Typography variant="body1" component="h5">Due to multiple player complaints...</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

AlertBanner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlertBanner);