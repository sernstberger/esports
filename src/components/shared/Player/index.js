import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';
// import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";
import Typography from 'material-ui/Typography';

import styles from "./styles"

function Player(props) {
  const { classes, isReply } = props;
  return (
    <div className={classes.root}>
      <img src={require(`../../../assets/images/players/LN1C7SYE7GX81512769819823.png`)} className={classes.clipPolygon} alt="Esports" />
      <div className={classes.clipHex} height="200" widtht="200">adfdas</div>
      <div className={classes.foo}></div>
      {/* <img src="https://source.unsplash.com/random/50x50" alt="something" className={classes.image} /> */}
      {/* <div>
      <Typography variant="title">NameHere</Typography>
        time
        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id scelerisque arcu. Suspendisse potenti.</Typography>
        <Button>reply</Button>
      </div> */}
    </div>
  );
}

Player.propTypes = {
  classes: PropTypes.object.isRequired,
  isReply: PropTypes.boolean,
};

export default withStyles(styles)(Player);