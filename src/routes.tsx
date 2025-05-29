import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/HomePage";
import { AuthProvider } from "./AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import ExploreShopsPage from "./pages/ExploreShopsPage";
import MerchantProfileSettingPage from "./pages/Merchant/MerchantProfileSettingPage";
import MerchantDashboardPage from "./pages/Merchant/MerchantDashboardPage";
import ThemeToggle from "./components/ThemeToggle";

// import ErrorPage from "./pages/ErrorPage";

// Layout component that specifies the default error element
const LayoutLayer = () => {
  return (
    <>
      <ThemeToggle />
      <Outlet />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutLayer />, // Use the Layout as the top-level route element
    // errorElement: <ErrorPage />, // Set a default error element here
    children: [
      { path: "/", element: <Home /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/explore", element: <ExploreShopsPage /> },
      { path: "/merchant/profile", element: <MerchantProfileSettingPage /> },
      { path: "/merchant/dashboard", element: <MerchantDashboardPage /> },

      {
        path: "/member/profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function AppRouter() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default AppRouter;
