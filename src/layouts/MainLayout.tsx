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


function MainLayout ({ toggleTheme }: { toggleTheme: () => void}) {
  // Outlet
  // 이 자리에 Routes의 내용이 들어올 자리라는 걸 표현하는 기능

  return (
    <Wrap>
      <Header />
      <Outlet />
      <Footer />
    </Wrap>
  );
}

export default MainLayout;