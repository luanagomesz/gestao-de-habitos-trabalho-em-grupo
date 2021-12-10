import styled from "styled-components";

export const PrincipalContainer = styled.div`
  border: 1.5px solid var(--grey-50);
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  height: 360px;
  border-radius: 20px;

  img {
    margin-top: 65px;
  }
`;

export const PrincipalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 7px -5px;

  h2 {
    margin-top: 15px;
  }
  button {
    background: none;
    font-size: 30px;
  }
`;

export const PrincipalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: center;
  justify-content: center;
`;
export const Modules = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15px;

  p {
    background-color: var(--purple);
    color: var(--white);
    padding: 5px;
    border-radius: 10px;
    width: 285px;
    height: 35px;
  }
  div {
    display: flex;
  }
  h4 {
    margin: 5px 15px 5px 15px;
  }
`;

export const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  border: 1.5px solid var(--grey-50);
  max-width: 600px;
  height: 360px;
  border-radius: 20px;
  margin: 2vh auto;

  input {
    border-radius: 10px;
    height: 45px;
    width: 100%;
    font-size: 20px;
    margin-bottom: 15px;
    padding-left: 15px;
    border: 1.5px solid var(--grey-50);
  }

  @media only screen and (max-width: 600px) {
  }
`;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 30vh;
  }

  @media only screen and (min-width: 600px) {
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 15px 60px 15px 0;
    font-weight: 500;
    font-size: 25px;
  }
  button {
    background: none;
    font-size: 30px;
  }
`;

export const ContainerButtons = styled.span`
  display: flex;
  width: 100%;
  margin-top: 15px;
 `

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  p {
    margin: 5px 10px;
    text-align: center;
  }

  input {
    width: 80%;
    height: 40px;
    margin: 5px auto;
    border: 2px solid var(--purple);
  }

  button {
    background: var(--purple);
    border-radius: 10px;
    color: var(--white);
    height: 40px;
    width: 80%;
    margin: 0 auto;
    font-size: 24px;
  }
`;
