import React, { useReducer } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import ToGoCountry from "./pages/ToGoCountry";
import GoneCountry from "./pages/GoneCountry";
import MainPage from "./pages/MainPage";
import { MainContext } from "./context/context";
import reducer, { initialState } from "./context/reducer";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const allData={
    state,
    dispatch,
  };
  return (
    <div className="App">
      <MainContext.Provider value={allData}>
         <Navbar></Navbar>
        <Routes>
        <Route path="/ToGoCountry" element={<ToGoCountry></ToGoCountry>}></Route>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/GoneCountry" element={<GoneCountry></GoneCountry>}></Route>
       </Routes>
      </MainContext.Provider>
     
    </div>
  );
}

export default App;

