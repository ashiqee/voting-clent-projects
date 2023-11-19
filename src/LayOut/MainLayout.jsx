import { Outlet } from "react-router-dom";
import NavBar from "../Page/Shared/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="mx-10">
            <NavBar />
            <Outlet />
        </div>
    );
};

export default MainLayout;