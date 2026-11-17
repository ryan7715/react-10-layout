import { Link } from "react-router";
import styled from "styled-components";

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: #f4f4f4;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

function Header() {
  return (
    <>
      <Head>
        <Nav>
          <Logo>MyApp</Logo>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
        </Nav>
        <NavRight>
          <Link to={"/auth/login"}>로그인</Link>
          <Link to={"/auth/signup"}>회원가입</Link>
          <button>테마토글</button>
        </NavRight>
      </Head>
      {/* Head 끝 */}
    </>
  );
}

export default Header;
