import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
