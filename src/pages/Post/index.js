import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {CardContent} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import Author from "../../components/shared/Author";
import MetaItem from "../../components/shared/MetaItem";

// import MatchStatistics from "../../components/shared/MatchStatistics";
// import MatchVersus from "../../components/shared/MatchVersus";
// import NewsCard from "../../components/shared/NewsCard";
import Comment from "../../components/shared/Comment";
import SectionHeader from "../../components/shared/SectionHeader";
// import VideoEmbed from "../../components/shared/VideoEmbed";

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHeart, faEye, faComment } from '@fortawesome/fontawesome-free-solid';

import styles from "./styles"

class Post extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} lg={10}>

            <Grid container>
              <Grid item xs={12} md={8}>
                <Card>
                  <CardContent>
                    <Typography variant="display3">A New Mage Character is coming to the League</Typography>

                    <CardContent className={classes.moreMetaInfo}>
                      <Author />
                      <div className={classes.metaItemContainer}>
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

                    <img src="https://source.unsplash.com/random/800x450" alt="something" />

                    <img src="https://source.unsplash.com/random/800x450" alt="something" />
                    {/* {this.latestMatchup.date} */}

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id scelerisque arcu. Suspendisse potenti. Suspendisse posuere justo non euismod commodo. Sed vitae velit enim. Vivamus fermentum convallis iaculis. Sed et dictum odio. Quisque viverra sagittis nisl, in elementum tellus ultricies eget. Proin venenatis, est sed condimentum placerat, risus urna volutpat tortor, ut scelerisque augue nulla sed nulla.</p>

                    <p>Integer suscipit pharetra sem vitae posuere. Donec vel maximus odio. Vivamus accumsan porttitor sem, sed commodo elit dignissim nec. Nulla ac metus imperdiet, varius dui in, efficitur diam. Fusce a libero dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vehicula auctor velit.</p>
                  </CardContent>
                </Card>

                <Card>
                  <SectionHeader
                    title="Comments"
                  />
                  <Comment />
                  <Comment isReply />
                  <Comment />
                  <Comment />
                  <Comment />
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

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);























// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// import { withStyles } from 'material-ui/styles';
// import Card, { CardContent } from 'material-ui/Card';
// import Chip from 'material-ui/Chip';
// import Typography from 'material-ui/Typography';

// import Author from "../Author";
// import MetaItem from "../MetaItem";

// import fontawesome from '@fortawesome/fontawesome';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faHeart, faEye, faComment } from '@fortawesome/fontawesome-free-solid';

// import styles from "./styles"

// function NewsCard(props) {
//   const { classes } = props;
//   return (
//     <div>
//       <Card className={classes.card}>
//         <Link to="/post" className={classes.cardMedia}
//           // className={classes.media}
//           style={{backgroundImage: "url(http://unsplash.it/453/453)"}}
//           // alt="Contemplative Reptile"
//         >
//           <div className={classes.metaInfo}>
//             <Chip label="tag" />
//             <Chip label="tag" />
//             <Typography variant="display1" component="h2">
//               Destroy WILL STREAM THE MERCENARIES MISSION
//             </Typography>
//             <Typography component="p">
//               { Date() }
//             </Typography>
//           </div>
//         </Link>
//         <CardContent className={classes.moreMetaInfo}>
//           <Author />
//           <div className={classes.metaItemContainer}>
//             <MetaItem
//               icon={<FontAwesomeIcon icon={faEye} />}
//               number={3434}
//             />
//             <MetaItem 
//               icon={<FontAwesomeIcon icon={faHeart} />}
//               number={35}
//             />
//             <MetaItem 
//               icon={<FontAwesomeIcon icon={faComment} />}
//               number={565}
//             />
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// NewsCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(NewsCard);