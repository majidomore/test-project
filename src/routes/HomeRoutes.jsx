import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "@/pages/About";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";

const HomeRoutes = () => (
  <div className="">
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default HomeRoutes;
