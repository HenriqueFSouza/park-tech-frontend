import AuthLayout from "@/components/auth/layout";
import { AppLayout } from "@/components/common/AppLayout";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import PricesPage from "@/pages/prices";
import UsersPage from "@/pages/users";
import VehiclesPage from "@/pages/vehicles";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/vehicles",
        element: <VehiclesPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/prices",
        element: <PricesPage />,
      },
    ],
  },
]);
