import React, { useEffect, useState, Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

// Layouts
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));

// Pages
const AuthPage = React.lazy(() => import("./pages/auth/AuthPage"));
const HomePage = React.lazy(() => import("./pages/home/HomePage"));
const VolunteerPage = React.lazy(
    () => import("./pages/volunteer/VolunteerPage")
);
const NgoPage = React.lazy(() => import("./pages/ngo/NgoPage"));

// Define the User interface
interface User {
    role: string;
    // You can add other fields here depending on your user object structure
}

function RouterWithAuthCheck() {
    const location = useLocation();
    const authSelector = useSelector((state: RootState) => state.auth);

    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("token");
            setUser(JSON.parse(localStorage.getItem("user") || "null"));
            setAuth(!!token);
        };

        checkAuth();
    }, [location.pathname, authSelector.user]);

    if (authSelector.loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {auth ? (
                    <>
                        <Route
                            path="/auth/*"
                            element={
                                <Navigate
                                    to={
                                        user?.role === "NGO"
                                            ? "/ngo"
                                            : "/volunteer"
                                    }
                                />
                            }
                        />
                        <Route
                            path="/volunteer/*"
                            element={<VolunteerPage />}
                        />
                        <Route path="/ngo/*" element={<NgoPage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </>
                ) : (
                    <Route element={<AuthLayout />}>
                        <Route path="/auth/*" element={<AuthPage />} />
                        <Route path="*" element={<Navigate to="/auth" />} />
                    </Route>
                )}
            </Routes>
        </Suspense>
    );
}

function AppRouter() {
    return (
        <BrowserRouter>
            <RouterWithAuthCheck />
        </BrowserRouter>
    );
}

export default AppRouter;
