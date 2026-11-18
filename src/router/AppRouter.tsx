import { createBrowserRouter, type RouteObject } from "react-router";
import About from "../pages/About.tsx";
import Home from "../pages/Home.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import Login from "../pages/auth/Login.tsx";
import SignUp from "../pages/auth/Sign up.tsx";
import AuthLayout from "../layouts/AuthLayout.tsx";

const AppRouter = (toggleTheme: () => void) => {
  const routes: RouteObject[] = [
    {
      element: <AuthLayout />,
      path: "/auth",
      children: [
        {path: "login", element: <Login /> },
        {path: "signUp", element: <SignUp /> },
      ],
    },


    {
      element: <MainLayout toggleTheme={{toggleTheme}} />,
      path: "/",
      children: [
        { index: true, element: <Home /> }, // Home => "/"
        { path: "/about", element: <About /> }, // About => "/about"

      ],
    },


  ];

  return createBrowserRouter(routes);
};

export default AppRouter;
