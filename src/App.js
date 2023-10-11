import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Homepage, Product } from "./pages";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route excat path="/" element={<Homepage />} />
        <Route path="/produk" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
