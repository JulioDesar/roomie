/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
