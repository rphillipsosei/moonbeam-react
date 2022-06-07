import React from "react";
import Navigation from "./components/Navigation.jsx"
import styled from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Services from "./Services.jsx"
import {useState} from 'react'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Services from "./pages/Services.jsx"


function App() {
  return (
<BrowserRouter>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/services" element={<Services/>}/>

</Routes>
</BrowserRouter>

  );
}

export default App;

