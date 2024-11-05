import AuthLayout from "@/layout/authLayout";
import MainLayout from "@/layout/mainLayout";
import LoginScreen from "@/pages/auth/LoginScreen";
import RegisterScreen from "@/pages/auth/RegisterScreen";
import HomePageScreen from "@/pages/home/HomePageScreen";
import LandingPageScreen from "@/pages/screen/LandingPageScreen";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import PrivateRoute2 from "./PrivateRoute2";

export const mainRouter = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePageScreen />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <RegisterScreen />,
      },
      {
        index: true,
        path: "login",
        element: <LoginScreen />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute2>
        <LandingPageScreen />
      </PrivateRoute2>
    ),
  },
]);
