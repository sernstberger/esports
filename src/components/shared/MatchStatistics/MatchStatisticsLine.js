import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
// import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";
import Typography from 'material-ui/Typography';

import styles from "./styles"

function MatchStatisticsLine(props) {
  const { classes } = props;

  const homePercentage = (props.homeScore / (props.homeScore + props.awayScore)) * 100;
  const awayPercentage = (props.awayScore / (props.homeScore + props.awayScore)) * 100;

  return (
    <div>
      <Grid container>
        <Grid item xs={4} style={{paddingLeft: 30, paddingRight: 0}}>
          <div className={classes.scoreBarWrapper}>
            <div className={classes.scoreBarNumber}>
              <Typography variant="body2" component="h6" style={{color: "#FFF"}}>{ props.homeScore }</Typography>
            </div>
            <div className={classes.scoreBar}></div>
            {/* <div className={classes.scoreBarBar} style={{width: `${props.homeScore}%`}}></div> */}
            <div className={classes.scoreBarBar} style={{width: `${homePercentage}%`}}></div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" component="h6" align="center" style={{color: "#FFF", fontWeight: 700}}>{ props.statName }</Typography>
        </Grid>
        <Grid item xs={4} style={{paddingLeft: 0, paddingRight: 30}}>
          <div className={classes.scoreBarWrapper}>
            <div className={classes.scoreBar}></div>
            <div className={classes.scoreBarBarRight} style={{width: `${awayPercentage}%`}}></div>
            <div className={classes.scoreBarNumberRight}>
              <Typography variant="body2" component="h6" style={{color: "#FFF"}}>{ props.awayScore }</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

MatchStatisticsLine.propTypes = {
  classes: PropTypes.object.isRequired,
  homeScore: PropTypes.number.isRequired,
  awayScore: PropTypes.number.isRequired,
  statName: PropTypes.string.isRequired,
};

export default withStyles(styles)(MatchStatisticsLine);