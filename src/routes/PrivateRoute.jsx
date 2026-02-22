import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
    // return !!localStorage.getItem("financheck_token");
    return true;
};

const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
