import styled from "styled-components";

export default function HeaderButton({ text, isSelected }) {
  return <Main isSelected={isSelected}>{text}</Main>;
}

const Main = styled.button`
  background-color: #ffff;
  opacity: ${(props) => (props.isSelected ? 0.9 : null)};

  height: 60%;
  border-radius: 5px;
  margin-right: 10px;

  cursor: pointer;

  &:active {
    opacity: 0.9;
  }
`;
