import {Theme} from "material-ui/styles";
// import variables from "../../assets/styles/variables";

const styleSheet = (Theme) => ({
  card: {
    display: "flex",
    justifyItems: "space-between",
    overflow: "hidden",
  },

  title: {
    // display: "inline-block",
    background: "#3F3351",
    alignItems: "center",
    display: "flex",
    margin: "-20px 35px -20px -25px",
    padding: "20px 30px",
    position: "relative",
    transform: "skew(-15deg)",

    '&:after': {
      content: '""',
      background: "#3F3351",
      height: "100%",
      top: 0,
      position: "absolute",
      right: -15,
      width: 10,
    }
  },
  
  titleText: {
    transform: "skew(15deg)",
  },

  bang: {
    // display: "inline-block",
  }
});

export default styleSheet;
