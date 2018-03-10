import {Theme} from "material-ui/styles";
import variables from "../../../assets/styles/variables";

const styleSheet = (Theme) => ({
  SectionSubHeader: {
    backgroundColor: `${Theme.palette.secondary.dark2}`,
    borderBottom: `1px solid ${Theme.palette.secondary.dark1}`,
    borderTop: `1px solid ${Theme.palette.secondary.dark1}`,
    // border: "1px solid ",
  },
});

export default styleSheet;
