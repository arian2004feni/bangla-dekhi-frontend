import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/Common/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
