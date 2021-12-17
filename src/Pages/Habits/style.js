import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerList = styled.div`
  position: absolute;
  background-color: white;
  top: 87px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 90vh;

  .close {
    position: relative;
    left: 300px;
    top: -85px;

    cursor: pointer;
    :hover {
      color: var(--orange);
    }
  }

  .imgRight {
    display: none;
  }

  button {
    background-color: var(--orange);
    padding: 10px;
    border-radius: 8px;
    width: 300px;
    color: white;
    margin: 0 auto;
  }

  @media (min-width: 900px) {
    right: 0;
    height: 700px;
    top: 80px;

    .list {
      background-color: var(--grey-0);
      width: 600px;
      display: flex;
      flex-direction: column;
      z-index: 1;
      overflow-y: scroll;
      height: 400px;
      padding: 10px;
    }

    .imgRight {
      display: block;
      position: absolute;
      bottom: -106px;
      right: 0;
      margin: 0 50px 20px 0;
      width: 300px;
      opacity: 0.8;
      z-index: 0;
    }

    button {
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
    z-index: 1;
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
  top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    background: transparent;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 270px;
  }

  p {
    color: var(--grey-50);
    font-weight: 600;
  }

  h1 {
    color: var(--orange);
    font-weight: 400;
    margin-bottom: 20px;
  }

  h3 {
    text-align: center;
    color: var(--orange);
    margin-bottom: 20px;
  }

  .button1,
  .button2,
  .button3,
  .button4 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100px;
    width: 100px;
    cursor: pointer;
    margin: 10px;
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
    z-index: 0;
  }

  @media (min-width: 900px) {
    width: 50%;
    height: 90vh;
    left: 0;
    top: 80px;
    background-color: #fdf0f0;

    .button1,
    .button2,
    .button3,
    .button4 {
      height: 200px;
      margin: 10px 50px;
      width: 170px;
    }

    h1 {
      font-size: 40px;
      font-weight: 400;
    }

    h3 {
      font-size: 25px;
      font-weight: lighter;
    }

    section {
      width: 600px;
      gap: 40px;
      justify-content: space-around;
      margin: 10px 0;
    }

    p {
      font-size: 20px;
    }

    img {
      width: 170px;
      height: 170px;
    }

    button {
      margin: 0 30px;
    }
  }
`;
