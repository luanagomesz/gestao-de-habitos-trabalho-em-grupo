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
  .menuMobile {
    display: none;
    @media (max-width: 900px) {
      display: block;
    }
  }
  .logo-container {
    display: flex;
    flex-direction: row;
    margin-left: 25px;
    justify-content: center;
    align-items: center;
    align-content: center;
    @media (max-width: 900px) {
      margin-left: 5px;
    }
    h1 {
      font-weight: normal;
      margin: 10px;
    }
  }
  .icons {
    margin-right: 30px;
    @media (max-width: 900px) {
      margin-right: 5px;
    }
  }
  .pages-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
  }

  .username {
    margin: 10px;
    color: var(--white);
    font-size: 24px;
    display: block;
    @media (max-width: 900px) {
      display: none;
    }
  }

  .pages-container button {
    display: none;
    @media (min-width: 900px) {
      font-size: 24px;
      margin: 10px;
      display: block;
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
    @media (max-width: 450px) {
      display: none;
    }
  }
`;

export default HeaderContainer;
