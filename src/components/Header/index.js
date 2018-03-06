import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
// import { faCheckSquare } from '@fortawesome/fontawesome-free-solid'

import styles from "./styles"
 
// fontawesome.library.add(brands, faCheckSquare)
// fontawesome.library.add(faCheckSquare, faTwitch);

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class Header extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <AppBar position="static" className={classes.root}>
          <Grid container justify="center" className={classes.secondaryHeader}>
            <Grid item xs={12} md={10}>
              {/* <FontAwesomeIcon icon={faTwitch} /> */}
              <FontAwesomeIcon icon={["fab","facebook"]}/>
              <FontAwesomeIcon icon={["fab","twitter"]}/>
              <FontAwesomeIcon icon={["fab","twitch"]}/>
              <FontAwesomeIcon icon={["fab","youtube"]}/>
              <FontAwesomeIcon icon={["fab","instagram"]}/>

              Login
            </Grid>
          </Grid>

          <Grid container justify="center" className={classes.mainHeaderWrapper}>
            <Grid item xs={12} md={10} className={classes.mainHeader}>
              <Tabs
                value={value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                scrollable
                scrollButtons="auto"
              >
                <Tab label="Home" />
                <Tab label="Features" />
                <Tab label="Teams" />
                {/* <Tab label="Merchandise" /> */}
              </Tabs>
              <img src={require(`../../assets/images/overwatch-league-logo.png`)} className={classes.logo} alt="Esports" width="164" />
              
              <TextField
                // defaultValue="react-bootstrap"
                placeholder="Enter your search here..."
                // label="Bootstrap"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  className: classes.textFieldFormLabel,
                }}
              />
              
            </Grid>
          </Grid>
        </AppBar>
        {/* {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>} */}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);

















// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// import Input, { InputLabel } from 'material-ui/Input';
// import TextField from 'material-ui/TextField';
// import { FormControl } from 'material-ui/Form';
// import purple from 'material-ui/colors/purple';

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   formControl: {
//     margin: theme.spacing.unit,
//   },
//   inputLabelFocused: {
//     color: purple[500],
//   },
//   inputInkbar: {
//     '&:after': {
//       backgroundColor: purple[500],
//     },
//   },
//   textFieldRoot: {
//     padding: 0,
//     'label + &': {
//       marginTop: theme.spacing.unit * 3,
//     },
//   },
//   textFieldInput: {
//     borderRadius: 4,
//     backgroundColor: theme.palette.common.white,
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     padding: '10px 12px',
//     width: 'calc(100% - 24px)',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     '&:focus': {
//       borderColor: '#80bdff',
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//     },
//   },
//   textFieldFormLabel: {
//     fontSize: 18,
//   },
// });

// function CustomizedInputs(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.container}>
//       <FormControl className={classes.formControl}>
//         <InputLabel
//           FormControlClasses={{
//             focused: classes.inputLabelFocused,
//           }}
//           htmlFor="custom-color-input"
//         >
//           Name
//         </InputLabel>
//         <Input
//           classes={{
//             inkbar: classes.inputInkbar,
//           }}
//           id="custom-color-input"
//         />
//       </FormControl>
//       <TextField
//         defaultValue="react-bootstrap"
//         label="Bootstrap"
//         InputProps={{
//           disableUnderline: true,
//           classes: {
//             root: classes.textFieldRoot,
//             input: classes.textFieldInput,
//           },
//         }}
//         InputLabelProps={{
//           shrink: true,
//           className: classes.textFieldFormLabel,
//         }}
//       />
//     </div>
//   );
// }

// CustomizedInputs.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(CustomizedInputs);