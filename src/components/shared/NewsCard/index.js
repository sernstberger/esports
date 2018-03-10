import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';

import Author from "../Author";
import MetaItem from "../MetaItem";

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faComment } from '@fortawesome/fontawesome-free-solid';

import styles from "./styles"

function NewsCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <Link to="/post" className={classes.cardMedia}
          // className={classes.media}
          style={{backgroundImage: "url(http://unsplash.it/453/453)"}}
          // alt="Contemplative Reptile"
        >
          <div className={classes.metaInfo}>
            <Chip label="tag" />
            <Chip label="tag" />
            <Typography variant="display1" component="h2">
              Destroy WILL STREAM THE MERCENARIES MISSION
            </Typography>
            <Typography component="p">
              { Date() }
            </Typography>
          </div>
        </Link>
        <CardContent className={classes.moreMetaInfo}>
          <Author />
          <div className={classes.metaItemContainer}>
            <MetaItem
              icon={<FontAwesomeIcon icon={faEye} />}
              number={3434}
            />
            <MetaItem 
              icon={<FontAwesomeIcon icon={faHeart} />}
              number={35}
            />
            <MetaItem 
              icon={<FontAwesomeIcon icon={faComment} />}
              number={565}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCard);