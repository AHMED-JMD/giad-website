import React, {useState,useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer";
import Home from "./components/Home/Home";
import Loader from "./components/Loader";
import Navbar1 from "./components/Navbar/navbar1";
import Navbar2 from "./components/Navbar/navbar2";
import Products from "./components/Products/Products";
import ServicesCenter from "./components/Services Center/Services-Center";
import { LangContext } from "./context/langContext";
import { useContext } from 'react';

function App() {
  const {language} = useContext(LangContext);
  const [isLoading, setLoading] = useState(true);

  window.onload = (event) => {
    setTimeout(()=>{
      setLoading(false);
    }, )
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    
    <div className={language === 'Ar'? "App" : "App en"}>
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
