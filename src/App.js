import "./App.css";
import Hearders from "./Components/HeadersComponents/HeadersComponent";
import AboutUs from "./Components/BodyComponent/AboutUs";
import Portfolio from "./Components/BodyComponent/Portfolio";
import Contact from "./Components/BodyComponent/ContactMe";
import Footer from "./Components/BodyComponent/Footer";
// import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  return (
    <>
      <Hearders />
      <AboutUs />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
