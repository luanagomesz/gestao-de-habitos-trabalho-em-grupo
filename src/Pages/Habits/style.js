import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerList = styled.div`
  position: absolute;
  background-color: white;
  top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  button {
    border: 2px solid black;
    width: 100px;
  }

  @media (min-width: 900px) {
    right: 0;
    height: 88vh;
    top: 80px;

    button{
      display: none;
    }
  }
`;

export const Footer = styled.footer`
  .vector {
    opacity: 1;
    width: 270px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media (min-width: 900px) {
    .vector {
      display: none;
    }
  }
`;

export const ContainerMenuCategory = styled.div`
  position: absolute;
  z-index: 1;
  background-color: white;
  top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 270px;

  button {
    background: transparent;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0;
  }

  h1 {
    color: var(--orange);
    font-weight: 600;
    margin-bottom: 20px;
  }

  h3 {
    text-align: center;
    color: var(--orange);
  }

  .button1,
  .button2,
  .button3,
  .button4 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 130px;
    width: 115px;
    cursor: pointer;
  }

  .button1:hover,
  .button2:hover,
  .button3:hover,
  .button4:hover {
    border: 2px solid var(--orange);
    border-radius: 3px;
  }

  img {
    box-sizing: border-box;
    height: 90px;
    width: 90px;
  }

  @media (min-width: 900px) {
    width: 50%;
    height: 88vh;
    left: 0;
    top: 80px;
    background-color: #fdf0f0;

    section {
      width: 400px;
      height: 400px;
      gap: 40px;
      justify-content: space-around;
    }

    img {
      width: 150px;
      height: 150px;
    }

    button {
      margin: 0 30px;
    }
  }
`;
