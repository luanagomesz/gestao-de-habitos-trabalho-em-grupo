import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: transparent;
  }

  @media (min-width: 900px) {
    .containerRight {
      display: inline;
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
  background-color: white;
  top: 150px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 270px;

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
    border: 2px solid transparent;
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
    height: 100%;
    gap: 20px;
    margin: 40px 0;
    width: 90%;
  }
`;
