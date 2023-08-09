import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'; 
import ReaderBook from "./pages/ReaderBook.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ReaderBook" element={<ReaderBook />} />
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
