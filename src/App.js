import React from "react";
import Navigation from "./components/Navigation.jsx"
import styled from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Services from "./Services.jsx"
import {useState} from 'react'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Services from "./pages/Services.jsx"
import Shop from "./pages/Shop.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Apply from "./pages/Apply.jsx"
import Careers from "./pages/Careers.jsx"


function App() {
  return (
<Router>
<Navigation/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/services" element={<Services/>}/>
<Route path="/shop" element={<Shop/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/careers" element={<Careers/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/apply" element={<Apply/>}/>
</Routes>
</Router>

  );
}

export default App;

