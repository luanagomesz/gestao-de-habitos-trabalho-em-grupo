import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  .containerRight {
    display: none;
  }

  .containerLeft {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 20px;
    margin: 40px 0;
    width: 90%;
  }

  h1 {
    color: var(--orange);
    font-weight: 600;
  }

  h3 {
    text-align: center;
    color: var(--orange);
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 250px;
    max-width: 300px;
    flex-wrap: wrap;
    gap: 20px;
  }

  img {
    box-sizing: border-box;
    height: 90px;
    width: 90px;
  }

  button {
    background: transparent;
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

  @media (min-width: 900px) {
    .containerRight {
      display: inline;
    }

    section {
      max-width: 60%;
    }
  }
`;

export const Footer = styled.footer`
  .vector {
    opacity: 1;
    width: 323px;
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
