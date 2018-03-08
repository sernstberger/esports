import {StyleRules, Theme} from "material-ui/styles";
import { relative } from "upath";
// import variables from "../../assets/styles/variables";

const styleSheet = (Theme) => ({
  scoreBarWrapper: {
    background: `${Theme.palette.secondary.dark1}`,
    marginBottom: 40,
    position: "relative",
    height: 20,
    transform: "skew(-15deg)",
    width: "100%",
  },
  scoreBar: {
    background: `repeating-linear-gradient( to right, ${Theme.palette.secondary.dark4}, ${Theme.palette.secondary.dark4} 3px, transparent 3px, transparent 7px )`,
    height: 20,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 2,

  },
  scoreBarBar: {
    background: `${Theme.palette.primary.main}`,
    height: 20,
    position: "absolute",
    right: 0,
    top: 0,
    transition: "250ms width",
    width: 0,
    zIndex: 1,
  },
  scoreBarBarRight: {
    // background: `${Theme.palette.primary.main}`,
    background: "#00DEFF",
    height: 20,
    left: 0,
    position: "absolute",
    top: 0,
    transition: "250ms width",
    width: 0,
    zIndex: 1,
  },
  scoreBarNumber: {
    left: -22,
    position: "absolute",
    top: 0,
    transform: "skew(15deg)",
    zIndex: 3,
  },
  scoreBarNumberRight: {
    position: "absolute",
    right: -22,
    top: 0,
    transform: "skew(15deg)",
    zIndex: 3,
  },
});

export default styleSheet;
