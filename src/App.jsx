import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomeRoutes from "@/routes/HomeRoutes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <HomeRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
