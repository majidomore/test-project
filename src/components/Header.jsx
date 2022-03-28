import React from "react";
import logo from "@/assets/img/logo.svg";
import HomeNav from "@/routes/HomeNav";

const Header = ({}) => (
  <div>
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Header</h2>
    <HomeNav />
  </div>
);

export default Header;
