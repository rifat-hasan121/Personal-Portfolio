import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootPages from "../Pages/RootPages";
import Development from "../Pages/Development";
import Quote from "../Pages/Quote";
import Technician from "../Pages/Technician";
import JobHunting from "../Components/JobHunting";
import BulkaBazar from "../Components/BulkaBazar";
import DragonNews from "../Components/DragonNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootPages,
  },
  {
    path: "/job-hunting",
    Component: JobHunting
  },
  {
    path: "/bulka-bazar",
    Component: BulkaBazar,
  },
  {
    path: "/dragon-news",
    Component: DragonNews,
  },
  {
    path: "/development",
    Component: Development,
  },

  {
    path: "/quote",
    Component: Quote,
  },

  {
    path: "/technician",
    Component: Technician,
  },
]);

export default router;
