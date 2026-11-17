
import styled from "styled-components";
import { RouterProvider } from "react-router";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import GlobalStyle from "./Styles/GlobalStyle.ts";
import AppRouter from "./router/AppRouter.tsx";

const Wrap = styled.div`
  display: flex;
  min-height: 100dvh;
  flex-direction: column;
`;

/*
    이 아래는 Function 줄
*/

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrap>
        <Header />
        <RouterProvider router={AppRouter()} />
        <Footer />
      </Wrap>
    </>
  );
}

export default App;
