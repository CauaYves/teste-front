import styled from "styled-components";
import Image from "next/image";
import logo from "../../../public/img/logo.png";
import suport from "../../../public/img/icon_support.svg";
import exit from "../../../public/img/icon_exit.svg";
import colors from "../../constants/colors";
import Link from "next/link";

export default function Navbar() {
  return (
    <Main>
      <SubMain>
        <Left>
          <Link href="#">
            <Image src={logo} alt="Erudir" width={150} height={105} />
          </Link>
        </Left>

        <Right>
          <Link href="#">
            <h3>Suporte</h3>
            <Image src={suport} alt="suporte" />
          </Link>
          <Link href="/CadAcesso">
            <h3>Sair</h3>
            <Image src={exit} alt="suporte" />
          </Link>
        </Right>
      </SubMain>
    </Main>
  );
}

const Main = styled.nav`
  background-color: ${colors.fifty};
  width: 100dvw;
  height: 50px;
  box-shadow: 0px 2px 10px #00000066;
`;

const SubMain = styled.div`
  max-width: 1200px;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  height: 70%;

  padding-right: 10px;
  border-right: 1px solid white;
`;

const Right = styled.div`
  display: flex;
  cursor: initial;

  a:first-child {
    margin-right: 20px;
    border-right: 1px solid white;
    padding-right: 10px;
  }
  a {
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
  }
  a:hover {
    font-weight: 600;
  }
  h3 {
    margin-right: 5px;
  }
`;
