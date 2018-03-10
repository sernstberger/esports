import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, {CardContent} from 'material-ui/Card';
import AlertBanner from "../../components/shared/AlertBanner";

import MatchStatistics from "../../components/shared/MatchStatistics";
import MatchVersus from "../../components/shared/MatchVersus";
import NewsCard from "../../components/shared/NewsCard";
import SectionHeader from "../../components/shared/SectionHeader";
import SectionSubHeader from "../../components/shared/SectionSubHeader";
// import VideoEmbed from "../../components/shared/VideoEmbed";

import styles from "./styles"

function Header(props) {
  // const { classes } = props;
  return (
    <div style={{ padding: 10 }}>
      <Grid container justify="center" spacing={0}>
        <Grid item xs={12} md={10}>
          <Grid container>
            <Grid item xs={12}>
              <AlertBanner />
            </Grid>
            {/* <Grid item xs={12}>
              <VideoEmbed />
            </Grid> */}
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
              {/* <NewsCard /> */}
              {/* <NewsCard /> */}
              {/* <NewsCard /> */}
            </Grid>

            <Grid item xs={12} sm={4}>
              <SectionHeader
                title="Latest Results"
                buttonTitle="See full results"
                link="#"
              />
              foooman

              <SectionHeader
                title="Last Match"
                buttonTitle="See full results"
                link="#"
              />

              <Card>
                <SectionSubHeader
                  title="Striker Go"
                />
                <CardContent>
                  <MatchVersus
                    // title={this.latestMatchup.title}
                    // replayUrl={this.latestMatchup.replayUrl}
                    // homeName={this.latestMatchup.home.name}
                    // homeCity={this.latestMatchup.home.city}
                    // homeScore={this.latestMatchup.home.score}
                    // awayName={this.latestMatchup.away.name}
                    // awayCity={this.latestMatchup.away.city}
                    // awayScore={this.latestMatchup.away.score}
                    title="Foobar"
                    replayUrl="#"
                    homeName="Fusion"
                    homeCity="Philadelphia"
                    homeScore={4}
                    awayName="Dynasty"
                    awayCity="Seoul"
                    awayScore={6}
                  />
                </CardContent>
                <SectionSubHeader
                  title="Match Statistics"
                />
                <CardContent>
                  <MatchStatistics />
                </CardContent>
                <SectionSubHeader
                  title="Match MVP"
                />
                <CardContent>
                  laksjflksj
                </CardContent>
              </Card>

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