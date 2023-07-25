import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage/AboutPage";
import LoginSection from "./pages/Login/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/HomePage/Home";
import NewSignup from "./pages/SignUpPage/NewSignupPage";
import Umrah from "./pages/UmrahPackage/Umrah";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HotelsPage from "./pages/HotelsPage/HotelsPage";
import PackagePage from "./pages/PackagePage/PackagePage";
import FlightPage from "./pages/FlightsPage/FlightPage";
import CheckAvaibilityPage from "./pages/CheckAvaibilityPage/CheckAvaibilityPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSection />} />
          <Route path="/signup" element={<NewSignup />} />
          <Route path="/hotel" element={<HotelsPage />} />
          <Route path="/packages" element={<PackagePage />} />
          <Route path="/flights" element={<FlightPage />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/umrah" element={<Umrah />} />
          <Route path="/package-availability" element={<CheckAvaibilityPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
