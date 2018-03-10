// import {Theme} from "material-ui/styles";
// import variables from "../../assets/styles/variables";

const styleSheet = (Theme) => ({
  root: {
    background: Theme.palette.secondary.dark1,
    border: "none",
  //   flexGrow: 1,
  //   // width: '100%',
  //   // marginTop: Theme.spacing.unit * 3,
  //   // backgroundColor: Theme.palette.background.paper,
  },
  secondaryHeader: {
    backgroundColor: Theme.palette.secondary.dark2,
    color: Theme.palette.primary.main,
    height: 50,
    marginTop: 0,

    '& a': {
      color: "#FFF",
      marginRight: 20,
      padding: 5,

      '&:hover': {
        color: Theme.palette.primary.main,
      },
    },
  },

  secondaryHeaderContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },

  mainHeaderWrapper: {
    height: 70,
    // marginTop: 0,
    margin: 0,
  },

  mainHeader: {
    display: "flex",
    // height: 70,
    justifyContent: "space-between",
    // padding: 20,
  },

  textFieldRoot: {
    padding: 0,
    'label + &': {
      // marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    // borderRadius: 4,
    backgroundColor: Theme.palette.secondary.dark4,
    // border: '1px solid #ced4da',
    borderRadius: 20,
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: "250ms all",

    '&::-webkit-input-placeholder': {
      color: "#D1CFD4",
    },
    '&:-moz-placeholder': {
      color: "#D1CFD4",
    },

    '&:focus': {
      backgroundColor: "#fff",
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  logo: {
    marginTop: -20,
  },
  textFieldFormLabel: {
    fontSize: 18,
  },
});

export default styleSheet;
