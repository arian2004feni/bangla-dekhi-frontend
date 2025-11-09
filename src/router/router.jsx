import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Root/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  },
]);
