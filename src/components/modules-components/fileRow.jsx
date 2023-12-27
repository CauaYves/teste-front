import styled from "styled-components";
export default function FileRow({ name, type, extension }) {
  return (
    <Main>
      <div>{name}</div>
      <Infos>
        <div>{type}</div>
        <div>{extension}</div>
      </Infos>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 50px;
  padding: 0px 10px;
  border-radius: 5px;
  margin: 0px 0px 5px 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #d9d9d9;
  box-shadow: 1px 1px 2px #0000001f;
  &:hover {
    opacity: 0.9;
  }
`;
const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`;
