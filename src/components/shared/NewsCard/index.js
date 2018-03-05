import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';

import styles from "./styles"

function NewsCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.cardMedia}
          // className={classes.media}
          style={{backgroundImage: "url(http://unsplash.it/453/453)"}}
          // alt="Contemplative Reptile"
        >
          <div className={classes.metaInfo}>
            <Chip label="tag" />
            <Chip label="tag" />
            <Typography variant="headline" component="h2">
              Destroy WILL STREAM THE MERCENARIES MISSION
            </Typography>
            <Typography component="p">
              Date
            </Typography>
          </div>
        </div>
        <CardContent>
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