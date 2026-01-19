import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
    return !!localStorage.getItem("financheck_token");
};

const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
