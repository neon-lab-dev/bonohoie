import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Boys from "./pages/Boys";
import Girls from "./pages/Girls";
import AboutUs from "./pages/AboutUs";
import NoMatch from "./pages/NoMatch";
import NotificationBar from "./components/NotificationBar/NotifcationBar";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Moments from "./components/Moments/Moments";
import Desktop2 from "./pages/Desktop2/Desktop2";

function App() {
  return (
    <div className="app">
      <Router>
        <NotificationBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boys" element={<Boys />} />
          <Route path="/girls" element={<Girls />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/desktop2" element={<Desktop2 />} />
        </Routes>
      </Router>
      <Moments />
      <Footer />
    </div>
  );
}

export default App;
