import styled from "styled-components";
import GlobalStyle from "./GlobalStyle.ts";

const Wrap =styled.div`
`;

const Head =styled.header`
    display: flex;
  justify-content: space-between;
  align-items: center;
`;
function App() {
  return(
    <>
      <GlobalStyle/>
      <Wrap>
        <Head>

        </Head>
        <main>

        </main>
        <footer>

        </footer>
      </Wrap>
    </>
  )
}

export default App;