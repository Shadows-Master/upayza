import { FooterMain, HeaderMain } from "../components";
import { Outlet } from "react-router-dom";

import React from "react";

function Main() {
  return (
    <div id="page" className="site">
      <HeaderMain />
      <Outlet />
      <FooterMain />
    </div>
  );
}

export default Main;
