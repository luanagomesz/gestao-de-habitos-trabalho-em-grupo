import styled from "styled-components";

export const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;

    .footer {
      display: none;
    }
  }

  h1 {
    color: var(--orange);
    margin: 10px;
  }
  .modal-container {
    width: 500px;
    border: solid blie 2px;
  }

  .list-container {
   

    @media(min:900px){
      width:50vw;
    }

  }

  ul {
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
