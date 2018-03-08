import { grey } from "material-ui/colors";
import createMuiTheme from "material-ui/styles/createMuiTheme";
import createPalette from "material-ui/styles/createPalette";
import createTypography from "material-ui/styles/createTypography";
import variables from "./variables";

const themeWithPalette = createMuiTheme({
  palette: {
    primary: {
      light: "#00ff5b",
      main: "#1BD75D",
      dark: "#164934",
    },
    secondary: {
      light: "#8040F5",
      main: "#6a3bc0",
      dark1: "#4b3b60",
      dark2: "#403351",
      dark3: "#392d49",
      dark4: "#362b45",
      dark5: "#2B2135",
    }
  },

  // Build out Global overrides for this default theme.
  overrides: {

    MuiButton: {
      root: {
        // borderRadius: "50px",
        color: "#FFF",
        fontStyle: "italic",
        fontWeight: 700,
        textTransform: "uppercase",
      },
      raised: {
        backgroundColor: "#7a7283",
        borderRadius: "50px",
        color: "#FFF",
      },
    },

    MuiCardContent: {
      root: {
        "&:last-child": {
          paddingBottom: 16,
        },
      },
    },

    MuiChip: {
      root: {
        borderRadius: 0,
        height: "auto",
        marginLeft: 5,
        marginRight: 5,
        paddingBottom: 3,
        paddingTop: 3,
        transform: "skew(-15deg)",
      },
      label: {
        // fontSize: "1.5rem",
        fontStyle: "italic",
        fontWeight: 700,
        textTransform: "uppercase",
        transform: "skew(15deg)",
      },
    },

    MuiPaper: {
      root: {
        backgroundColor: "#362b45",
        border: "1px solid #4b3b60",
        borderRadius: "4px !important",
      },
    },

    MuiTab: {
      root: {
        fontStyle: "italic",
        fontWeight: 700,
        minWidth: "unset !important",
        textTransform: "uppercase",
      },

      label: {
        color: "#fff",
      },

      rootPrimarySelected: {
        // color: Theme.palette.primary.main,
        color: "red",

        // '& label': {
        //   color: "#fff",
        //   fontSize: "14px !important",
        // },
      },
    }


  },
});

// Here we can make all Configuration changes that we need.
function createDefaultTheme(initialTheme) {
  const typography = createTypography(initialTheme.palette, {
    // System font
    fontFamily:
      // '"Open Sans","-apple-system,system-ui,BlinkMacSystemFont","Helvetica Neue",Arial,sans-serif',
      '"Roboto Condensed","-apple-system,system-ui,BlinkMacSystemFont","Helvetica Neue",Arial,sans-serif',
  });

  return {
    ...initialTheme,
    typography: {
      ...typography,

      display1: {
        ...typography.display1,
        color: "#FFF",
        fontSize: "2rem",
        fontStyle: "italic",
        fontWeight: 700,
        lineHeight: 1,
        textTransform: "uppercase",
      },
      headline: {
        ...typography.headline,
        color: "#FFF",
        fontSize: "1.5rem",
      },
      title: {
        ...typography.title,
        color: "#FFF",
        // fontFamily: "Roboto",
        fontSize: "1.5rem",
        fontStyle: "italic",
        fontWeight: 700,
        textTransform: "uppercase",
      },
      subheading: {
        ...typography.subheading,
        color: "#FFF",
        // fontFamily: "Roboto",
        fontSize: "1.25rem",
        // fontStyle: "italic",
        fontWeight: 700,
        textTransform: "uppercase",
      },
      body1: {
        ...typography.body1,
        color: "#A59CAE",
        fontFamily: "Open Sans",
        fontSize: "1rem",
      },
      caption: {
        ...typography.caption,
        color: "#FFF",
        fontSize: "0.75rem",
      },
      button: {
        ...typography.caption,
        color: "#FFF",
        fontWeight: 400,
      },
    },

    palette: {
      ...initialTheme.palette,
      background: {
        ...initialTheme.palette.background,
        // default: "#ce8113",
        appBar: "#fff",
      },
    },
  };
}

const defaultTheme = createDefaultTheme(themeWithPalette);

// export {
//   IStyles,
// };

export default defaultTheme;
