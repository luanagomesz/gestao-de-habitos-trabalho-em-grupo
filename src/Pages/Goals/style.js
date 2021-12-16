import styled from "styled-components";

export const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;

    .footer {
      position: absolute;

      @media (min-width: 900px) {
        display: none;
      }
    }
  }

  h1 {
    color: var(--orange);
    margin: 10px;
  }
  .modal-container {
    width: 50%;
  }

  .modal-container {
  display: flex;
  justify-content: center;
  border: solid red 2px;
  height: 100vh;

  
    }

    .img-container {
      display: none;

      @media (min-width: 900px) {
        display: block;
      }
    }

    .list-container {
      text-align: center;

      @media (min-width: 900px) {
        width: 50%;
        height: 100vh;
        background-color: #fbece2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    ul {
      overflow-y: auto;
      max-width: 400px;
      height: 420px;
      background-color: #f5f5f5;
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 20px;
    }
  }
  img {
    width: 250px;
  }
`;
