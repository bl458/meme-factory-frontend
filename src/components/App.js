import React from "react";
import { ThemeProvider } from "@material-ui/core";

import Home from "./Home";

import theme from "../style/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
