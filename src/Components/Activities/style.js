import styled from "styled-components";

const ActivityPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .PrincipalContainer {
    display: flex;
    width: 270px;
    height: 330px;
    border: solid var(--grey-50) 1px;
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 12px;
  }
  .PrincipalHeader {
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
  }

  .PrincipalBody {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: center;
    justify-content: center;
  }

  .Modules {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;

    p {
      background-color: var(--purple);
      color: var(--white);
      padding: 5px;
      border-radius: 10px;
      min-width: 230px;
      height: 35px;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      h4 {
        margin: 5px 5px 5px 5px;
      }
    }
  }
  .Wave {
    opacity: 1;
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .Yoga {
    display: flex;
    margin-top: 5px;
    width: 250px;
  }

  @media (min-width: 768px) {
    display: flex;

    .PrincipalContainer {
      width: 560px;
    }
    .PrincipalBody {
      width: 560px;
    }
    .Modules {
      p {
        width: 510px;
      }
      h4 {
        margin: 5px 50px 5px 50px;
      }
    }

    .Wave {
      display: none;
    }
  }
`;

export default ActivityPage;

//////////////////////////////////////////////

export const ModalContainer = styled.div`
  width: 270px;
  height: 350px;
  border: solid var(--grey-50) 1px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 12px;

  img {
    margin-top: 55px;
    width: 221px;
    @media (min-width: 768px) {
      display: none;
    }
  }

  p {
    margin-top: 1px;
    color: red;
  }

  @media (min-width: 768px) {
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

  .frequency-container {
    margin: 0 auto;
    min-width: 230px;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;

    button {
      font-size: 15px;
      width: 78px;
    }

    @media (min-width: 768px) {
      width: 530px;
      button {
        width: 160px;
      }
    }
  }

  input {
    min-width: 230px;
    height: 50px;
    border-radius: 5px;
    border: solid var(--grey-50) 1px;
    margin: 0 auto;
    font-size: 1.2rem;
    margin-top: 10px;
    @media (min-width: 768px) {
      width: 530px;
    }
  }
`;

export const ButtonAdd = styled.div`
  display: flex;
  button {
    width: 500px;
    margin: 15px auto;
  }

  @media (min-width: 768px) {
    width: 530px;
  }
`;
