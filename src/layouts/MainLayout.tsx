import Header from "../components/Header.tsx";
import { Outlet,} from "react-router";
import Footer from "../components/Footer.tsx";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  min-height: 100dvh;
  flex-direction: column;
  background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
`;


function MainLayout() {
  return (
    <Wrap>
      <Header />
      <Outlet />
      <Footer />
    </Wrap>
  );
}

export default MainLayout;