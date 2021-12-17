import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    height: 90vh;
    width: 100vw;
  }
`;
export const ContainerAll = styled.div`
  @media (min-width: 900px) {
    width: 100vw;
    height: 100vh;
  }

  display: flex;

  flex-direction: column;
`;
export const ContainerList = styled.div`
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media (max-width: 900px) {
    margin-top: 30px;
  }
  .habits {
    overflow-y: auto;
    overflow-x: hidden;
    .close {
      position: relative;
      left: 280px;
      top: -85px;

      cursor: pointer;
      :hover {
        color: var(--orange);
      }
    }
    .renderButton {
      background-color: var(--orange);
      margin-top: 30px;
      color: white;
      width: 200px;
      padding: 10px 10px;
      border-radius: 8px;
      border: none;
      margin-left: 50px;

      cursor: pointer;
      z-index: 5;
      :hover {
        background-color: white;
        color: var(--orange);
        border: 1px solid var(--orange);
        z-index: 5;
      }
      @media (max-width: 900px) {
        z-index: 5;
      }
    }
  }

  .imgRight {
    display: none;
  }

  @media (min-width: 900px) {
    right: 0;
    height: 100%;

    .list {
      width: 500px;
      display: flex;
      flex-direction: column;
      background-color: white;
    }

    .imgRight {
      position: absolute;

      width: 300px;
      opacity: 0.8;
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
    z-index: -10;
  }

  @media (min-width: 900px) {
    .vector {
      display: none;
    }
  }
`;

export const ContainerMenuCategory = styled.div`
  top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 30px;

  .renderButton {
    background-color: var(--orange);
    margin-top: 30px;
    color: white;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    z-index: 5;
    :hover {
      background-color: white;
      color: var(--orange);
      border: 1px solid var(--orange);
    }
    @media (min-width: 900px) {
      display: none;
    }
  }

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
    @media (max-width: 900px) {
      width: 80%;
    }
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
    height: 100%;

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
