import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
// import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";
import Typography from 'material-ui/Typography';

import styles from "./styles"

class Team extends React.Component {
  // const { classes } = props;
  render() {
    return (
      <div>
        <img src={require(`../../../assets/images/teamLogos/${this.props.name}.svg`)} className={this.props.classes.img} />
        <Typography component="h5" variant="caption">{this.props.city}</Typography>
        <Typography component="h4" variant="subheading">{this.props.name}</Typography>
      </div>
    );
  }
}

Team.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default withStyles(styles)(Team);