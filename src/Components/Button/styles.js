import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.background};
  width: ${(props) => props.width};
  height: 45px;
  color: var(--white);
  border-radius: 10px;
  font-size: 24px;
  padding: 5px;
  :hover {
    background-color: ${(props) => props.backgroundHover};
  }
`;
