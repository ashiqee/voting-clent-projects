import { Outlet } from "react-router-dom";
import NavBar from "../Page/Shared/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-opacity-30 bg-gray-200">
        <NavBar />
      </div>
      <div className="min-h-[calc(100vh-80px)] ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
