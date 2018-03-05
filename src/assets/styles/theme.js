import { grey } from "material-ui/colors";
import createMuiTheme from "material-ui/styles/createMuiTheme";
import createPalette from "material-ui/styles/createPalette";
import createTypography from "material-ui/styles/createTypography";
import variables from "./variables";

// interface IStyles {
//   classes: any;
// }

// Create Initial Theme with Our Primary and Accent Colors
const themeWithPalette = createMuiTheme({
  palette: createPalette({
    type: "light",
    primary: {
      50: variables.primaryColor50,
      100: variables.primaryColor100,
      200: variables.primaryColor200,
      300: variables.primaryColor300,
      400: variables.primaryColor400,
      500: variables.primaryColor,
      600: variables.primaryColor600,
      700: variables.primaryColor700,
      800: variables.primaryColor800,
      900: variables.primaryColor900,
      A100: variables.primaryColorA100,
      A200: variables.primaryColorA200,
      A400: variables.primaryColorA400,
      A700: variables.primaryColorA700,
      // contrastDefaultColor: "light",
    },
    secondary: {
      50: variables.secondaryColor,
      100: variables.secondaryColor,
      200: variables.secondaryColor,
      300: variables.secondaryColor,
      400: variables.secondaryColor,
      500: variables.secondaryColor,
      600: variables.secondaryColor,
      700: variables.secondaryColor,
      800: variables.secondaryColor,
      900: variables.secondaryColor,
      A100: variables.secondaryColor,
      A200: variables.secondaryColor,
      A400: variables.secondaryColor,
      A700: variables.secondaryColor,
      // contrastDefaultColor: "light",
    },
  }),

  // Build out Global overrides for this default theme.
  overrides: {

    MuiButton: {
      root: {
        borderRadius: "50px",
        color: "#FFF",
      },
      raised: {
        backgroundColor: "#7a7283",
        color: "#FFF",
        fontStyle: "italic",
        fontWeight: 700,
        textTransform: "uppercase",
      },
    },

    MuiChip: {
      root: {
        borderRadius: 0,
        marginLeft: 5,
        marginRight: 5,
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
        fontStyle: "italic",
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
