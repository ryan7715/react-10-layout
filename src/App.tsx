
import { RouterProvider } from "react-router";
import GlobalStyle from "./Styles/GlobalStyle.ts";
import AppRouter from "./router/AppRouter.tsx";
import {useEffect, useState} from "react";
import {ThemeProvider} from "styled-components";
import { DarkTheme, LightTheme } from "./Styles/theme.ts";


function App() {

    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? "dark" : "light";
    });


    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);



    const toggleTheme: () => void = () => {
    };

    return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <GlobalStyle />
        <RouterProvider router={AppRouter(toggleTheme, theme, setTheme)} />
    </ThemeProvider>
  );
}

export default App;
