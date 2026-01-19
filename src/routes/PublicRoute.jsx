import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
    return !!localStorage.getItem("financheck_token");
};

const PublicRoute = () => {
    return isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;
