import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gidilmişler from "./pages/Gidilmişler";
import Gidilecekler from "./pages/Gidilecekler";

function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Gidilecekler" element={<Gidilecekler />} />
        <Route path="/Gidilmişler" element={<Gidilmişler />} />
      </Routes>
    </div>
  );
}

export default App;
