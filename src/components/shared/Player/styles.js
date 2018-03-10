import {Theme} from "material-ui/styles";
// import variables from "../../assets/styles/variables";

const styleSheet = (Theme) => ({
  root: {
    display: "block",
    position: "relative",
    height: 200,
    width: 200,
  },
  clipPolygon: {
    // background: "red",
    clipPath: "polygon(0% 0%, 100% 0%, 96% 73%, 50% 96%, 4% 73%, 0% 25%)",
    left: 0,
    maxWidth: "100%",
    position: "absolute",
    bottom: 0,
    // justifyItems: "space-between",
    // marginLeft: 20,
    zIndex: 2,
  },

  clipHex: {
    background: `${Theme.palette.secondary.main}`,
    // clipPath: "polygon(50% 0%, 180% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 50% 96%, 96% 73%, 96% 27%, 50% 4%, 4% 27%, 4% 73%, 50% 96%, 50% 100%, 0% 75%, 0% 25%)",
    // clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    // clip-path: polygon(0 0, 0 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 74%, 50% 100%, 100% 100%, 100% 0);
    height: 200,
    left: 0,
    maxWidth: "100%",
    position: "absolute",
    bottom: 0,
    width: 200,
    zIndex: 1,
  },

  foo: {
    backgroundColor: `${Theme.palette.secondary.dark4}`,
    borderRadius: "50%",
    border: `6px solid ${Theme.palette.secondary.main}`,
    height: 30,
    position: "absolute",
    right: -15,
    top: 30,
    width: 30,
    zIndex: 3,
  }

  // image: {
  //   borderRadius: "50%",
  //   marginRight: 10,
  // },
});

export default styleSheet;
