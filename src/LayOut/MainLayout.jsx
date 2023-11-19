import { Outlet } from "react-router-dom";
import NavBar from "../Page/Shared/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div className="">
      <div className="bg-slate-200 bg-opacity-10 py-3">
        {" "}
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
