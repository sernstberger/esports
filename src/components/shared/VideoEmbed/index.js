import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
// import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";
import Typography from 'material-ui/Typography';

import styles from "./styles"

function VideoEmbed(props) {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <iframe src="https://player.twitch.tv/?autoplay=false&video=v234899325" className={classes.responsiveVideo} frameBorder="0" allowFullScreen="true" scrolling="no" height="378" width="620"></iframe>
    </div>
  );
}

VideoEmbed.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoEmbed);