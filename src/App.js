import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import CampsiteDetailPage from "./pages/CampsiteDetailPage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="directory" element={<CampsitesDirectoryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
