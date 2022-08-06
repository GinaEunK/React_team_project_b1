import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element="" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
