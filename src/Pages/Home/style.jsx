import styled from "styled-components";

export const HeaderHome = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--ligthblue);
  color: var(--white);
  height: 70px;

  @media (max-width: 900px) {
    height: 70px;
  }

  aside {
    margin-right: 50px;
    padding: 0;
  }
  button {
    /* margin-right: 100px; */

    color: var(--white);
    font-size: 20px;
    margin: 50px;
  }

  .Logo {
    display: flex;
    align-items: center;
    margin: 100px;
  }
  .Logo img {
    height: 70px;
  }
  h1 {
    margin-left: 10px;
    font-size: 30px;
    font-weight: lighter;
  }
`;

export const BodyHome = styled.body`
  width: 100vw;
  height: 100vh;
  text-align: center;

  @media (min-width: 900px) {
    display: flex;
  }

  .intros {
    width: 95vw;
    height: 80vh;
    position: absolute;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justifify-content: center;
    flex-wrap: wrap;
    padding: 15px;

    @media (min-width: 900px) {
      width: 50%;
      height: 80vh;
      position: relative;
    }
  }

  .img-container {
    height: 80vh;

    @media (min-width: 900px) {
      width: 50%;
    }
  }

  img {
    width: 90%;

    @media (min-width: 900px) {
      width: 100%;
    }
  }

  .icons {
    border: solid orange 2px;
  }

  .box-1 {
    display: flex;
    width: 48%;
    heigth: 20%;
    font-size: 1rem;
    background-color: #502155;
    color: var(--white);
    border-radius: 15px;
    opacity: 50%;
    padding: 10px;

    @media (min-width: 900px) {
      width: 100%;
      heigth: 90%;
      font-size: 1.5rem;
    }
  }

  .box-2 {
    display: flex;
    width: 30%;
    height: 30%;
    font-size: 1rem;
    background-color: #f8b918;
    color: var(--white);
    border-radius: 15px;
    opacity: 50%;
    padding: 10px;
    margin: 30px;

    @media (min-width: 900px) {
      width: 100%;
      heigth: 20%;
      font-size: 1.5rem;
    }
  }

  .box-3 {
    display: flex;
    justify-content: center;
    align-center: center;
    width: 40%;
    height: 30%;
    font-size: 1rem;
    background-color: #f74545;
    color: var(--white);
    border-radius: 15px;
    padding: 10px;
    opacity: 50%;
    margin: 15px;

    @media (min-width: 900px) {
      heigth: 15%;
      font-size: 2rem;
    }
  }
`;

export const FooterHome = styled.footer`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  background-color: var(--grey-50);
  font-size: 1rem;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 60px 0 60px;
    justify-content: center;
    color: var(--white);
    font-weight: bold;
    flex-wrap: wrap;
  }
`;
