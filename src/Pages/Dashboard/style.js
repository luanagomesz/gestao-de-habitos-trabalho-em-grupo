import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--purple);
  color: var(--white);
  height: 100px;
  @media (max-width: 900px) {
    height: 70px;
  }
  .logoContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    .logo {
      width: 70px;
      height: auto;
      margin-bottom: 15px;
      :hover {
        cursor: pointer;
      }
      @media (max-width: 900px) {
        width: 50px;
      }
    }
    h1 {
      margin-left: 10px;
      font-size: 50px;
      font-weight: normal;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      @media (max-width: 900px) {
        display: none;
      }
    }
  }

  h1 {
    font-size: 50px;
    font-weight: normal;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    @media (max-width: 900px) {
      font-size: 30px;
      margin-left: 0px;
    }
  }
  div {
    margin-right: 20px;
    display: flex;
    align-items: center;
    p {
      margin-right: 35px;
      font-size: 30px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      :hover {
        cursor: pointer;
      }
    }
    .text {
      @media (max-width: 900px) {
        display: none;
      }
    }
    img {
      padding-top: 10px;
      width: 62px;
      height: 50px;
      :hover {
        cursor: pointer;
      }
    }
    .userImg {
      width: 90px;
      height: 65px;
      padding-top: 0px;
    }
  }
`;

export const ContainerContent = styled.main`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ContainerImg = styled.div`
  width: 50%;
  height: 100%;
  background-color: #e5e3ff;
  display: flex;
  align-items: center;
  justify-content: center;
  .vector {
    display: none;
  }
  img {
    width: 80%;
    height: auto;
    max-width: 680px;
  }
  @media (max-width: 900px) {
    background-color: var(--white);
    flex-direction: column;
    img {
      min-width: 250px;
      width: 80%;

      height: auto;
      margin-bottom: 80px;
    }
    .vector {
      display: block;
      float: left;
      position: fixed;
      left: 0px;
      bottom: 0px;
      max-width: 400px;
      min-width: 200px;
      width: 80%;
      margin-bottom: 0px;
    }
  }
`;

export const ContainerFocus = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
  #box {
    border: 2px solid var(--grey-50);
    border-radius: 10px;
    width: 80%;
    max-width: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
    justify-content: baseline;
    max-height: 500px;
    overflow-y: auto;
    min-width: 320px;
    @media (max-width: 900px) {
      width: 100%;
      max-height: 200px;
    }
    form {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #newInput {
      padding: 10px 0px;
      border: 1px solid var(--grey-50);
      width: 80%;
      max-width: 500px;
      margin: 10px 0px;
      height: 52px;
      border-radius: 5px;
      color: var(--grey-50);
      font-size: 25px;
      ::placeholder {
        padding: 0px 20px;
        color: var(--grey-50);
        font-size: 25px;
      }
    }
    h1 {
      background-color: var(--ligthpurple);
      width: 97%;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      text-align: center;
      font-weight: normal;
      color: var(--white);
      margin-top: 15px;
      border-radius: 8px;
      padding: 25px 0px;
      margin-bottom: 10px;
      font-size: 30px;
      @media (max-width: 900px) {
        font-size: 20px;
        padding: 15px 0px;
        margin-top: 0px;
        width: 100%;
        border-radius: 0px;
        margin-bottom: 5px;
      }
    }
    .labelSelected {
      margin-left: 20px;
      color: var(--ligthpurple);
      font-size: 25px;
    }
    .divSelected {
      padding: 10px 0px;
      border: 1px solid var(--grey-50);
      margin: 10px 0px;
      width: 80%;
      max-width: 500px;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      background-color: rgba(166, 106, 140, 0.3);
      @media (max-width: 900px) {
        margin: 3px 0px;
      }
    }
    div {
      padding: 10px 0px;
      border: 1px solid var(--grey-50);
      margin: 10px 0px;
      width: 80%;
      max-width: 500px;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      :hover {
        border: 1px solid var(--ligthpurple);
      }
      @media (max-width: 900px) {
        margin: 3px 0px;
      }

      label {
        margin-left: 20px;
        color: var(--grey-50);
        font-size: 25px;
      }
      input {
        margin-right: 30px;
        margin-bottom: 10px;
        :hover {
          cursor: pointer;
        }
      }
    }

    input[type="checkbox"]::before {
      content: "";
      position: relative;
      display: block;
      width: inherit;
      height: inherit;
      width: 20px;
      height: 20px;
      margin-bottom: 10px;
      background-color: var(--white);
      border: 1px solid var(--grey-50);
      border-radius: 3px;
    }
    input[type="checkbox"]:checked::after {
      content: "";
      width: 5px;
      display: block;
      height: 10px;
      margin-top: -29px;
      margin-left: 8px;
      border-color: var(--ligthpurple);
      border-style: solid;
      border-width: 0 3px 3px 0;
      position: relative;
      transform: rotate(45deg);
    }
  }
`;
