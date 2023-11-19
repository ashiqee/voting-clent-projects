import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Page/Home/Home";
import PresidentInfo from "../Page/PresidentInfo/PresidentInfo";
import VoteNow from "../Page/VoteNow/VoteNow";
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
      {
        path: "/voteNow",
        element: <VoteNow />,
      },
    ],
  },
]);

export default router;
