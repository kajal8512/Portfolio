import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import App from "./App";

const theme = createTheme();
const root = document.getElementById("root");

createRoot(root).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
