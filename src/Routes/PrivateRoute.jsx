import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext); 

    const loaction = useLocation();
    if (loading) {
      return <div>Loading...</div>;
    }


    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ form: loaction }} replace></Navigate>;
};

export default PrivateRoute;