import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import FindPartners from "../FindPartners/FindPartners";
import PrivateRouter from "../Contexts/PrivateRouter";
import CreatePartnerProfile from "../CreatePartnerProfile/CreatePartnerProfile";
import MyConnections from "../MyConnections/MyConnections";
import Profile from "../Profile/Profile";
import FindPartnerDetails from "../FindPartnerDetails/FindPartnerDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/find-partners",
        loader: () => fetch("http://localhost:3000/partner"),
        Component: FindPartners,
      },
      {
        path: "/find-partner-details/:id",
        element: (
          <PrivateRouter>
            <FindPartnerDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "/create-partner-profile",
        element: (
          <PrivateRouter>
            <CreatePartnerProfile></CreatePartnerProfile>
          </PrivateRouter>
        ),
      },
      {
        path: "/my-connections",
        element: (
          <PrivateRouter>
            <MyConnections></MyConnections>
          </PrivateRouter>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
