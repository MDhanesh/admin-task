import React from "react";
import Siderbar from "./sidebar";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Siderbar />
      </BrowserRouter>
    </div>
  );
}
export default App;
