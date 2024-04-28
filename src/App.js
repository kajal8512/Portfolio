import "./App.css";
import Hearders from "./Components/HeadersComponents/HeadersComponent";
import AboutUs from "./Components/BodyComponent/AboutUs";
import Portfolio from "./Components/BodyComponent/Portfolio";
// import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  return (
    <>
      <Hearders />
      <AboutUs />
      <Portfolio />
    </>
  );
}

export default App;
