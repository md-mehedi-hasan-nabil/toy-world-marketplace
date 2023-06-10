import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys";
import AddToy from "../pages/AddToy";
import NotFound from "../pages/NotFound";
import DetailsToy from "../pages/DetailsToy";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blogs from "../pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
    path: "/details/:toyId",
    element: <DetailsToy />,
  },
  {
    path: "add-toy",
    element: <AddToy />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
