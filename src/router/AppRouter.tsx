import { createBrowserRouter, type RouteObject } from "react-router";
import About from "../pages/About.tsx";
import Home from "../pages/Home.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import Login from "../pages/auth/Login.tsx";
import SignUp from "../pages/auth/Sign up.tsx";
import AuthLayout from "../layouts/AuthLayout.tsx";
import { type Dispatch, type SetStateAction } from "react";

const AppRouter = (
  toggleTheme: () => void,
  theme: "light | dark",
  setTheme: Dispatch<SetStateAction<"light" | "dark">>,
) => {
  const routes: RouteObject[] = [
    {
      element: <AuthLayout />,
      path: "/auth",
      children: [
        { path: "login", element: <Login /> },
        { path: "signUp", element: <SignUp /> },
      ],
    },

    {
      element: (
        <MainLayout
          toggleTheme={toggleTheme}
          theme={theme}
          setTheme={setTheme}
        />
      ),
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
