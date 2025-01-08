
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

    const loaction = useLocation();
    if (loading) {
      return <progress className="progress w-56"></progress>;
    }


    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ form: loaction }} replace></Navigate>;
};

export default PrivateRoute;