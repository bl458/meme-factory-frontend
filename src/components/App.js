import React from "react";
import { ThemeProvider } from "@material-ui/core";

import theme from "../style/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">Hi</div>
    </ThemeProvider>
  );
};

export default App;
