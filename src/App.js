import React from "react";
import Error from "./pages/error";
import Charts from "./chart";
import Table from "./tables";
import Blank from "./pages/blank";
import Forgetpassword from "./pages/forget";
import Register from "./pages/register";
import Login from "./pages/login";
import Button from "./components/button";
import Cards from "./components/card";
import Animation from "./utilites/animation";
import Border from "./utilites/border";
import Color from "./utilites/color";
import Others from "./utilites/other";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/button" element={<Button />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/colors" element={<Color />} />
          <Route path="/border" element={<Border />} />
          <Route path="/animations" element={<Animation />} />
          <Route path="/other" element={<Others />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgetpassword />} />
          <Route path="/error" element={<Error />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/chart" element={<Charts />} />
          <Route path="/Table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
