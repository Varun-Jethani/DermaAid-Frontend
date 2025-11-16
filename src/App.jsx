import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Pages/Navbar/Navbar";
import Home from "./components/Pages/Home";
import LandingPage from "./components/Pages/Landing Page/LandingPage";
import Us from "./components/Pages/About/Us";

const App = () => {
  return (
    // Add 'return' here
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/us" element={<Us />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
