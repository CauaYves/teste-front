import styled from "styled-components";
import CopyrightBlack from "@/components/copyright-black";
import Navbar from "@/components/navbar-components";
import colors from "@/constants/colors";
import breakpoint from "@/styles/breakpoint";

export default function Dashboard({ children }) {
  return (
    <Main>
      <Navbar />
      <main>{children}</main>
      <CopyContainer>
        <CopyrightBlack />
      </CopyContainer>
    </Main>
  );
}

const Main = styled.div`
  height: 100vh;
  width: 100dvw;
  background-color: ${colors.background};
  position: relative;
  overflow-x: hidden;
`;

const CopyContainer = styled.div`
  img {
    height: 50px;
  }
  @media (min-width: ${breakpoint}) {
    width: 100dvw;
  }
  @media (max-width: ${breakpoint}) {
    p {
      font-size: 2vw;
    }
  }
`;
