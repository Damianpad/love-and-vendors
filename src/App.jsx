import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "./components/styles/Container.styled";
import Home from "./components/pages/Home/Home";
import GettingStarted from "./components/pages/GettingStarted/GettingStarted";
import Login from "./components/pages/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import CoupleInfo from "./components/pages/CoupleInfo/CoupleInfo";
import CoupleFinish from "./components/pages/CoupleFinish/CoupleFinish";
import VendorInfo from "./components/pages/VendorInfo/VendorInfo";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/getting-started" element={<GettingStarted />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/couple-info" element={<CoupleInfo />}></Route>
        <Route path="/couple-finish" element={<CoupleFinish />}></Route>
        <Route path="/vendor-info" element={<VendorInfo />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
