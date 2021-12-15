import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  padding: 20px;

  .logo-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .user-info {
    color: var(--white);
    font-size: 24px;
  }

  .pages-container button {
    display: none;
    @media (min-width: 900px) {
      font-size: 24px;
      margin: 10px;
    }
  }

  img {
    width: 70px;
  }

  h1 {
    color: var(--white);
    margin-top: 30px;
  }

  button {
    background: none;
    font-size: 40px;
    margin-left: 5px;
    color: var(--white);
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
