import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "./components/styles/Container.styled";
import Home from "./components/pages/Home/Home";
import GettingStarted from "./components/pages/GettingStarted/GettingStarted";
import Login from "./components/pages/Login/Login";
import Navigation from "./components/Navigation/Navigation";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/getting-started" element={<GettingStarted />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
