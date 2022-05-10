import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer";
import Home from "./components/Home/Home";
import Navbar1 from "./components/Navbar/navbar1";
import Navbar2 from "./components/Navbar/navbar2";
import Products from "./components/Products/Products";
import ServicesCenter from "./components/Services Center/Services-Center";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />

        <Route path="/services-centers" element={<ServicesCenter />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
