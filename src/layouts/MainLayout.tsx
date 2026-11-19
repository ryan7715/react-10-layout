import Header from "../components/Header.tsx";
import { Outlet,} from "react-router";
import Footer from "../components/Footer.tsx";
import styled from "styled-components";
import { type Dispatch, type SetStateAction } from "react";

const Wrap = styled.div`
  display: flex;
  min-height: 100dvh;
  flex-direction: column;
  background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
`;


function MainLayout({
  toggleTheme,
  theme,
  setTheme,
}: {
  toggleTheme: () => void;
  theme: "light | dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}) {
  return (
    <Wrap>
      <Header toggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </Wrap>
  );
}

export default MainLayout;