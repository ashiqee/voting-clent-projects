import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Page/Home/Home";
import PresidentInfo from "../Page/PresidentInfo/PresidentInfo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/info",
        element: <PresidentInfo />,
      },
    ],
  },
]);

export default router;
