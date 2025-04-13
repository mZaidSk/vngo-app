// components/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    isAuthenticated: boolean;
    allowedRoles: string[];
    userRole?: string;
    children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    isAuthenticated,
    allowedRoles,
    userRole,
    children,
}) => {
    if (!isAuthenticated) {
        return <Navigate to="/auth" />;
    }

    if (!allowedRoles.includes(userRole || "")) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
