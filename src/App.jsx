// src/App.js
import React, { useState } from "react";

import Carousel from "./components/Carousel";
import "./index.css"; // Ensure Tailwind CSS is imported
import Home from "./Pages/Home ";
import Navbar from "./components/Navbar";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <Carousel />
    </div>
  );
};

export default App;
