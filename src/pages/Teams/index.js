import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {CardContent} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
// import Typography from 'material-ui/Typography';

import MatchStatistics from "../../components/shared/MatchStatistics";
import MatchVersus from "../../components/shared/MatchVersus";
import PageTitle from "../../components/shared/PageTitle";
import SectionHeader from "../../components/shared/SectionHeader";
import Player from "../../components/shared/Player";

import styles from "./styles"

class Teams extends React.Component {
  // const { classes } = props;

  latestMatchup = {
    title: "Pro League - Heroes Spring Split",
    date: "Saturday, March 6th",
    replayUrl: "alskfjsalkf",
    home: {
      name: "Shock",
      city: "San Francisco",
      score: 7,
      kills: 43,
      deaths: 34,
      assists: 43,
      headshots: 94,
    },
    away: {
      name: "Fuel",
      city: "Dallas",
      score: 4,
      kills: 43,
      deaths: 34,
      assists: 43,
      headshots: 94,
    }
  }

  render() {
    return (
      <div>
        <PageTitle />
        <Grid container justify="center">
          <Grid item xs={12} lg={10}>


            <Grid container>
              <Grid item xs={12}>
                <Card>
                  <Grid container>
                    <Grid item xs={3}>
                      <CardContent>
                        Date
                      </CardContent>  
                    </Grid>
                    <Grid item xs={3}>
                      <CardContent>
                        Date
                      </CardContent>
                    </Grid>
                    <Grid item xs={3}>
                      <CardContent>
                        Date
                      </CardContent>
                    </Grid>
                    <Grid item xs={3}>
                      <CardContent>
                        Date
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>





            <Grid container>
              <Grid item xs={12} md={8}>
                <SectionHeader
                  title="Last Match Results"
                  buttonTitle="Check Previous Results"
                  link="#"
                />
                <Card>
                  <CardContent>
                    {this.latestMatchup.date}
                  </CardContent>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <MatchVersus
                          title={this.latestMatchup.title}
                          replayUrl={this.latestMatchup.replayUrl}
                          homeName={this.latestMatchup.home.name}
                          homeCity={this.latestMatchup.home.city}
                          homeScore={this.latestMatchup.home.score}
                          awayName={this.latestMatchup.away.name}
                          awayCity={this.latestMatchup.away.city}
                          awayScore={this.latestMatchup.away.score}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MatchStatistics
                          homeKills={this.latestMatchup.home.kills}
                          homeDeaths={this.latestMatchup.home.deaths}
                          homeAssists={this.latestMatchup.home.assists}
                          homeHeadshots={this.latestMatchup.home.headshots}

                          awayKills={this.latestMatchup.away.kills}
                          awayDeaths={this.latestMatchup.away.deaths}
                          awayAssists={this.latestMatchup.away.assists}
                          awayHeadshots={this.latestMatchup.away.headshots}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardContent>
                  Match
                  </CardContent>
                  <CardContent>
                    Name
                  </CardContent>
                </Card>



                <SectionHeader
                  title="Standings"
                  buttonTitle="See all"
                  link="#"
                />
                <Card>
                  <Player />
                </Card>
                <Card>
                  Pro League
                </Card>
                <Card>
                  Match
                </Card>
                <Card>
                  Name
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <SectionHeader
                  title="Latest Results"
                  buttonTitle="See full results"
                  link="#"
                />

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
}

Teams.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Teams);