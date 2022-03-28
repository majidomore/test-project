import React from "react";
import { BrowserRouter } from "react-router-dom";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeRoutes from "@/routes/HomeRoutes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <HomeRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
