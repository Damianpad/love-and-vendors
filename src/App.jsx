import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "./components/styles/Container.styled";
import Home from "./components/pages/Home/Home";
import GettingStarted from "./components/pages/GettingStarted/GettingStarted";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/getting-started" element={<GettingStarted />}></Route>
      </Routes>
    </>
  );
}

export default App;
