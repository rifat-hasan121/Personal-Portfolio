import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootPages from "../Pages/RootPages";
import Development from "../Pages/Development";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootPages,
  },
  {
    path: "/development",
    Component:Development,
  },
]);

export default router;
