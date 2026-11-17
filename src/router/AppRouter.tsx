import { createBrowserRouter, type RouteObject } from "react-router";
import About from "../pages/About.tsx";
import Home from "../pages/Home.tsx";

const AppRouter = () => {
  const routes: RouteObject[] = [
    { index: true, element: <Home /> }, // Home => "/"
    { path: "/about", element: <About /> }, // About => "/about"
  ];

  return createBrowserRouter(routes);
};

export default AppRouter;
