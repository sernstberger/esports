import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
// import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";
import Typography from 'material-ui/Typography';

import MatchStatisticsLine from './MatchStatisticsLine';

import styles from "./styles"

function MatchStatistics(props) {
  // const { classes } = props;
  return (
    <div>
      <MatchStatisticsLine
        statName="Total Kills"
        homeScore={43}
        awayScore={34}
      />

      <MatchStatisticsLine
        statName="Total Deaths"
        homeScore={43}
        awayScore={66}
      />

      <MatchStatisticsLine
        statName="Total Assists"
        homeScore={12}
        awayScore={34}
      />

      <MatchStatisticsLine
        statName="Headshots"
        homeScore={23}
        awayScore={67}
      />
    </div>
  );
}

MatchStatistics.propTypes = {
  classes: PropTypes.object.isRequired,

  homeKills: PropTypes.number.isRequired,
  homeDeaths: PropTypes.number.isRequired,
  homeAssists: PropTypes.number.isRequired,
  homeHeadshots: PropTypes.number.isRequired,

  awayKills: PropTypes.number.isRequired,
  awayDeaths: PropTypes.number.isRequired,
  awayAssists: PropTypes.number.isRequired,
  awayHeadshots: PropTypes.number.isRequired,
};

export default withStyles(styles)(MatchStatistics);