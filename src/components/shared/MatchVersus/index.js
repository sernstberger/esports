import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
// import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";
import Typography from 'material-ui/Typography';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/fontawesome-free-solid'

import Team from "../Team";

import styles from "./styles"

class MatchVersus extends React.Component {

  // const { classes } = props;

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} style={{textAlign: "center"}}>
            <Typography component="h4" variant="subheading">{ this.props.title }</Typography>
            <Typography component="h6" variant="caption">Semifinals</Typography>
          </Grid>
          <Grid item xs={4} style={{textAlign: "center"}}>
            <Team
              name={ this.props.homeName }
              city={ this.props.homeCity }
            />
          </Grid>
          <Grid item xs={4} style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{textAlign: "center"}}>
              <Typography component="h3" variant="display1">{ this.props.homeScore } - { this.props.awayScore }</Typography>
              <FontAwesomeIcon style={{marginTop: 10}} icon={faPlayCircle} />
            </div>
          </Grid>
          <Grid item xs={4} style={{textAlign: "center"}}>
          <Team
              name={ this.props.awayName }
              city={ this.props.awayCity }
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

MatchVersus.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  replayUrl: PropTypes.string.isRequired,

  homeName: PropTypes.string.isRequired,
  homeCity: PropTypes.string.isRequired,
  homeScore: PropTypes.number.isRequired,

  awayName: PropTypes.string.isRequired,
  awayCity: PropTypes.string.isRequired,
  awayScore: PropTypes.number.isRequired,
};

export default withStyles(styles)(MatchVersus);