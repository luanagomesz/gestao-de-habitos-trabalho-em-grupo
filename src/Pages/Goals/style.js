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


      @media(min-width: 900px){
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

  .list-container {
    text-align: center;

    @media(min:900px){
      width:50%;
      border: solid red 1px;
    }

  }

  ul {
    max-width: 400px;
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
