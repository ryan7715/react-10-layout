import styled from "styled-components";
import { Outlet } from "react-router";


const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AuthLayout() {
  return (
    <Wrap>
      <Outlet />
    </Wrap>
  );

}

export default AuthLayout;