import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
// import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import NewsCard from "../../components/shared/NewsCard";

import styles from "./styles"

function Header(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <Grid container>
            <Grid item xs={12} sm={8}>
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </Grid>

            <Grid item xs={12} sm={4}>
              <NewsCard />
              <NewsCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);