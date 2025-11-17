import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Pages/Navbar/Navbar";
import Home from "./components/Pages/Home";
import LandingPage from "./components/Pages/Landing Page/LandingPage";
import Us from "./components/Pages/About/Us";
import Featured from "./components/Pages/Projects/Featured";
import axios from "axios";
import AuthPage from "./components/Pages/Auth/Auth";
axios.defaults.baseURL = "http://localhost:8000/"; // <-- Set your API base URL here
axios.defaults.headers.common["Content-Type"] = "application/json";
const App = () => {
  return (
    // Add 'return' here
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/us" element={<Us />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
