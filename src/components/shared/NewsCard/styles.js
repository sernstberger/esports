const styles = {
  card: {
    // maxWidth: 345,

    // position: "relative",
    // zIndex: 1,

    // '&:before': {
    //   background: "red",
    //   bottom: 0,
    //   content: '"addaf"',
    //   left: 0,
    //   position: "absolute",
    //   right: 10,
    //   top: 10,
    //   zIndex: 2,
    // },
  },
  cardMedia: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 450,
    position: "relative",
    zIndex: 1,

    '&:before': {
      background: "linear-gradient(to bottom, transparent 20%, #000 100%)",
      bottom: 0,
      content: '""',
      left: 0,
      position: "absolute",
      right: 0,
      top: 0,
      zIndex: 2,
    },
  },
};

export default styles;
