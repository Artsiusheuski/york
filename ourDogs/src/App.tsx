import "./App.scss";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/main/AboutUs";
import Contacts from "./components/main/Contacts";
import Gallery from "./components/main/Gallery";
import Links from "./components/main/Links";
import Error from "./Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="header">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/links" element={<Links />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
