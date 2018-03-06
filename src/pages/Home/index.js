import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
// import Typography from 'material-ui/Typography';

import NewsCard from "../../components/shared/NewsCard";
import SectionHeader from "../../components/shared/SectionHeader";
import VideoEmbed from "../../components/shared/VideoEmbed";

import styles from "./styles"

function Header(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <Grid container>
            <Grid item xs={12}>
              {/* <VideoEmbed /> */}
            </Grid>
            <Grid item xs={12} sm={8}>
              <SectionHeader
                title="Latest News Articles"
                buttonTitle="Browse All News"
                link="#"
              />
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <NewsCard />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <NewsCard />
                </Grid>
              </Grid>
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </Grid>

            <Grid item xs={12} sm={4}>
              <SectionHeader
                title="Latest Results"
                buttonTitle="See full results"
                link="#"
              />
              <NewsCard />
              <NewsCard />

              <SectionHeader
                title="Latest Results"
                buttonTitle="See full results"
                link="#"
              />
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