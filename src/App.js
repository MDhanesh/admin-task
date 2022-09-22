import React from "react";
import Siderbar from "./sidebar";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";

function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Siderbar />
        <Navbar />
      </BrowserRouter>
    </div>
  );
}
export default App;
