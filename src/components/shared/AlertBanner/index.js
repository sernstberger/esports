import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
// import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";
import Typography from 'material-ui/Typography';

import styles from "./styles"

function AlertBanner(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container justify="center" spacing={24}>
        <Grid item xs={12} md={10}>
          <Card>
            <CardContent className={classes.card}>

                <div className={classes.title}>
                  <Typography variant="title" component="h2" className={classes.titleText}>
                    Breaking News
                  </Typography>
                </div>
              
                {/* <Chip label="XENOWATCH" /> */}
                <div>
                  <Typography variant="subheading" component="h4">
                    SHADOW’S ABILITY WILL RECEIVE A NERF ON MAY 6TH
                  </Typography>
                  <Typography variant="caption" component="h5">Due to multiple player complaints...</Typography>
                </div>

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