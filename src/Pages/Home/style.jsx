import styled from "styled-components";

export const HeaderHome = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #8782d6;
  padding: 10px;

  .logo img {
    width: 80%;
  }

  .btn-container {
    marging-left: 50px;
  }

  h1 {
    display: none;

    @media (min-width: 900px) {
      display: block;
      color: var(--white);
      position: absolute;
      left: 80px;
    }
  }

  button {
    width: 30%;
    margin: 10px;
    border-radius: 10px;
    background-color: #8782d6;
    border: none;
    color: var(--white);
    font-size: 1.5rem;

    @media (min-width: 900px) {
      width: 150px;
      height: 50px;
      margin: 10px;
    }
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
    margin-top: 150px;

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
  align-items: center;
  justify-content: center;
  background-color: var(--grey-50);
  font-size: 1rem;
  position: absolute;

  @media (min-width:900px){
      bottom: 0;
    }

  span{
    color: var(--white);
    font-weight: bold;
    font-size: 0.8rem;

    @media (min-width:900px){
      margin-right: 70px;
      font-size: 1.2rem;
    }

   
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 60px 0 60px;
    justify-content: center;
 
    flex-wrap: wrap;
  } */
`;
