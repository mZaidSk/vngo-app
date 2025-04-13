import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div className="bg-red-500">
            <Outlet />
        </div>
    );
}

export default MainLayout;
