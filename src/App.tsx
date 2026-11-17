
import { RouterProvider } from "react-router";
import GlobalStyle from "./Styles/GlobalStyle.ts";
import AppRouter from "./router/AppRouter.tsx";


/*
    이 아래는 Function 줄
*/

function App() {
  return (
    <>
      <GlobalStyle />
        <RouterProvider router={AppRouter()} />
    </>
  );
}

export default App;
