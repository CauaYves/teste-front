import Image from "next/image";
import styled from "styled-components";
import logo from "../../public/img/logo.png";

export default function Copyright() {
  return (
    <Main >
      <Image src={logo} alt="Erudir tecnologia" width={100} />
      <Paragraph>
        c Copyright 2023 Culturalize - Todos os direitos reservados.
      </Paragraph>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
  }
`;

const Paragraph = styled.div`
  font-size: 10px;
`;
