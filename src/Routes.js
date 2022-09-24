import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Teste from "./pages/TesteForm";

function RoutesApp() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Admin" element={<Admin/>} />
      </Routes>

      <Routes>
        <Route path="/Login" element={<Login/>} />
      </Routes>

      <Routes>
        <Route path="/Teste" element={<Teste/>} />
      </Routes>

    </BrowserRouter>
    
  );
}

export default RoutesApp;
