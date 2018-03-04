import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
// import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import styles from "./styles"

function NewsCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          tags
          <Typography variant="headline" component="h2">
            DESTROY WILL STREAM THE MERCENARIES MISSION
          </Typography>
          <Typography component="p">
            Date
          </Typography>
          number of views 34543
          likes 34534
          comments 34534
        </CardContent>
      </Card>
    </div>
  );
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCard);