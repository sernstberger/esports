import {StyleRules, Theme} from "material-ui/styles";
import { relative } from "upath";
// import variables from "../../assets/styles/variables";

const styleSheet = (Theme) => ({
  scoreBarWrapper: {
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

    // left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    transition: "250ms width",
    width: 0,
    zIndex: 1,
  }
});

export default styleSheet;
