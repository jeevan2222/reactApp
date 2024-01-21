import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Error from "./Components/Error";
import AppLayout from "./Components/appLayout";
import Body from "./Components/Body";
import { pay } from "./Components/pay";
import ItemDetails from "./Components/ItemDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/payment",
        element: <pay />,
      },
      {
        path: "/about",
        element: <ItemDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
