import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Auth from "../pages/Auth";
import { useSelector } from "react-redux";
import { StoreState } from "../utils/store/appStore";
import ForgotPwd from "./Auth/ForgotPwd";

const Routes = () => {
  const token = useSelector((store: StoreState) => store.user.token);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: token ? <Navigate to="/home" /> : <Auth />,
      errorElement: <div>ERRROR</div>,
    },
    {
      path: "/home",
      element: token ? <Auth /> : <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Routes;
