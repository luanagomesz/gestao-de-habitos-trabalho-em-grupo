import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 30px;
    font-weight: bolder;
    color: var(--orange);
    margin: auto;
  }

  header {
    margin: 10px 0 0 20px;
    margin-right: 10%;
    width: 90%;
  }

  svg {
    cursor: pointer;
  }

  @media (min-width: 900px) {
    align-items: flex-start;

    span {
      padding-top: 80px;
      margin-left: 20vw;
      position: absolute;
      padding-left: 20px;
    }
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;

  img {
    width: 190px;
    opacity: 0.5;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 50%;
  }

  input {
    padding: 8px;
    border: 2px solid var(--grey-50);
    width: 250px;
    border-radius: 5px;
    margin: 3px;
  }

  input::placeholder {
    color: #d2cccc;
    font-size: 14px;
  }

  .errors {
    padding: 0 0 3px 0;
    margin: 0;
    text-align: left;
    width: 250px;
    font-size: 16px;
    color: var(--orange);
  }

  button {
    background-color: var(--orange);
    padding: 5px;
    font-size: 25px;
    width: 170px;
    color: var(--grey-0);
    border-radius: 6px;
    margin: 10px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
    margin: 15px;
    color: var(--grey-50);
  }

  a {
    text-decoration: none;
    color: var(--orange);
  }

  .vector {
    opacity: 1;
    width: 323px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .flexContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 900px) {
    flex-direction: row-reverse;
    margin-top: 40vh;
    align-items: flex-start;
    width: 50vw;

    main {
      justify-content: space-around;
    }

    form {
      position: absolute;
      left: 10;
      border: 2px solid var(--grey-50);
      width: 400px;
      height: 400px;
      padding: 20px;
      border-radius: 8px;
      justify-content: space-around;
    }

    input {
      width: 340px;
    }

    input::placeholder {
      font-size: 18px;
    }

    .errors {
      position: static;
      margin: 0;
      width: 340px;
      text-align: left;
    }

    aside {
      background-color: #fbece2;
      width: 50vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 0;
      top: 0;
      border-left: 1px solid var(--orange);
    }

    p {
      position: absolute;
      top: 75vh;
    }

    .vector {
      display: none;
    }

    .flexContainer {
      flex-direction: row;
    }

    img {
      width: 400px;
      opacity: 1;
    }

    button {
      margin: 20px;
    }
  }
`;
