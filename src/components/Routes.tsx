import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreState } from "../utils/store/appStore";
import AuthProvider from "./AuthProvider";
import Auth from "../pages/Auth";
import Home from "../pages/Home";

const Routes = () => {
  const userPresent = useSelector((store: StoreState) => store.user.user.id);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: userPresent ? <Navigate to="/home" /> : <Auth />,
      errorElement: <div>ERROR</div>,
    },
    {
      path: "/home",
      element: userPresent ? <Home /> : <Navigate to="/" />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
  );
};

export default Routes;
