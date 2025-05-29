import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootPages from "../Pages/RootPages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootPages,
  },
]);

export default router;
