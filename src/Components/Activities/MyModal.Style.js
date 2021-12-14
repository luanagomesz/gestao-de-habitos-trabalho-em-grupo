import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 270px;
  height: 411px;
  border: solid var(--grey-50) 1px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 12px;

  img {
    margin-top: 60px;
    width: 221px;
    @media (min-width: 900px) {
      display: none;
    }
  }

  p {
    margin-top: 1px;
    color: red;
  }

  @media (min-width: 900px) {
    width: 560px;
  }

  h1 {
    font-size: 1.5rem;
  }

  .modal-header {
    min-width: 240px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button {
      background: none;
      font-size: 30px;
    }
  }

  .difficulty {
    margin: 0 auto;
    min-width: 230px;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;

    @media (min-width: 900px) {
      width: 530px;
      button {
        width: 160px;
      }
    }
  }

  input[type="radio"] {
    -webkit-appearance: none;
  }

  .title,
  .dateInput {
    height: 50px;
    border-radius: 10px;
    border: solid var(--purple) 3px;
    margin: 0 auto;
    font-size: 1.2rem;
    margin-top: 10px;
    @media (min-width: 900px) {
      width: 530px;
    }
  }

  .dateInput {
    min-width: 150px;
  
    }
  }
  .title {
    min-width: 240px;
  }

  .level {
    background-color: var(--purple);
    height: 45px;
    color: var(--white);
    border-radius: 10px;
    font-size: 17px;
    padding: 5px;
    width: 150px;
    text-align: center;
    padding-top: 14px;
        
  }
  .level__veryHard{
    padding-bottom: 4px;
  }
  .level:active {
    background: #702d77;
  }

`;

export const ButtonAdd = styled.div`
  display: flex;
  button {
    width: 500px;
    margin: 15px auto;
  }

  @media (min-width: 900px) {
    width: 530px;
  }
`;
