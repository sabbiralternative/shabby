import { Navigate, useLocation } from "react-router-dom";
/* This component we are not using */
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const loginName = localStorage.getItem("loginName");
  if (token && loginName) {
    return children;
  }
  return <Navigate to="/login" replace state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
