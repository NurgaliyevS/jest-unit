import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div>
      <Link to="/" data-testid="main-link">
        main
      </Link>
      <Link to="/about-page" data-testid="main-about">
        about
      </Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
