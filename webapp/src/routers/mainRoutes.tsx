import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DetailPage } from "../pages/DetailPage";
import { Error404Page } from "../pages/Error404Page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:id",
    element: <DetailPage />,
  },
  {
    path: "/*",
    element: <Error404Page />,
  },
]);
