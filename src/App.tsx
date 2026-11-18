
import { RouterProvider } from "react-router";
import GlobalStyle from "./Styles/GlobalStyle.ts";
import AppRouter from "./router/AppRouter.tsx";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import { DarkTheme, LightTheme } from "./Styles/theme.ts";


/*
    이 아래는 Function 줄
*/

function App() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    // Props를 통해 setTheme를 내릴 것인가?

    const toggleTheme: () => void = () => {
        if (theme === "light") setTheme("dark");
        else setTheme("light");

    };

    return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <GlobalStyle />
        <RouterProvider router={AppRouter(toggleTheme)} />
    </ThemeProvider>
  );
}

export default App;
