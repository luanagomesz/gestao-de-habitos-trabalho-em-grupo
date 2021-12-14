import styled from "styled-components";

const HeaderContainer = styled.div`
  heigth: 30px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  height: 124px;
  width: 100%;
  justify-content: space-around;

  border: solid green 3px;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  h1 {
    color: var(--white);
  }

  button {
    background: none;
    font-size: 40px;
    margin-left: 5px;
    color: var(--white);
    border: solid green 2px;
  }
  div {
    display: flex;
  }

  .Habbit {
    margin-left: 10px;
    @media (max-width: 650px) {
      display: none;
    }
  }
`;

export default HeaderContainer;
