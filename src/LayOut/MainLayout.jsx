import { Outlet } from "react-router-dom";
import NavBar from "../Page/Shared/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-opacity-30 bg-gray-200">
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
