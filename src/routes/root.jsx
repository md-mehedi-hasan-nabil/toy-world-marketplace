import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys";
import AddToy from "../pages/AddToy";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/all-toys",
    element: <AllToys />,
  },
  {
    path: "/my-toys",
    element: <MyToys />,
  },
  {
    path: "add-toy",
    element: <AddToy />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
