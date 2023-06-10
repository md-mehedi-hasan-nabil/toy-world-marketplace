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
import PrivateRoute from "../components/PrivateRoute";
import EditToy from "../pages/EditToy";

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
    element: (
      <PrivateRoute>
        <MyToys />
      </PrivateRoute>
    ),
  },
  {
    path: "/details/:toyId",
    element: (
      <PrivateRoute>
        <DetailsToy />
      </PrivateRoute>
    ),
  },
  {
    path: "/add-toy",
    element: (
      <PrivateRoute>
        <AddToy />
      </PrivateRoute>
    ),
  },
  {
    path: "/edit-toy/:toyId",
    element: (
      <PrivateRoute>
        <EditToy />
      </PrivateRoute>
    ),
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
