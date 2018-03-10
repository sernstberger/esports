import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';
// import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";
import Typography from 'material-ui/Typography';

import styles from "./styles"

function Comment(props) {
  const { classes, isReply } = props;
  return (
    <CardContent className={classes.root}>
      {/* <div className={classes.icon}>{icon}</div> */}
      <img src="https://source.unsplash.com/random/50x50" alt="something" className={classes.image} />
      <div>
      <Typography variant="title">NameHere</Typography>
        time
        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id scelerisque arcu. Suspendisse potenti.</Typography>
        <Button>reply</Button>
      </div>
    </CardContent>
  );
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
  isReply: PropTypes.boolean,
};

export default withStyles(styles)(Comment);