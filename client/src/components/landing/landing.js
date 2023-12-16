import React from "react";
import Navbar from "./landing-components/Navbar";

import { Outlet } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Landing;
