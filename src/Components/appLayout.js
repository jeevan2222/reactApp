import React from "react";

import App from "../App";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const appLayout = () => {
  return (
    <div className="">
      <App />
      <Outlet />
    </div>
  );
};

export default appLayout;
