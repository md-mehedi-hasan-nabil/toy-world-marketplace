import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "./Loader";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return <Loader />;
  }

  return user ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
