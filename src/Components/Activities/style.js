import styled from "styled-components";

const ActivityPage = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* .PrincipalContainer {
    display: flex;
    width: 305px;
    height: 350px;
    border: solid var(--grey-50) 1px;
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 12px;
    background: var(--grey-0);
    overflow: auto;

    li {
      width: 270px;
      height: 70px;
    }
  
  } */

  .listContainer {
    height: 420px;
    margin-top: 20px;
    /* position: absolute; */
    overflow-y: auto;
    background-color: var(--grey-0);
    border: none;
    border-radius: 10px;

    @media (min-width: 900px) {
      right: 0;
    }
  }

  .listContainer img {
    display: none;
  }

  .modalContainer {
    position: absolute;

    @media (min-width: 900px) {
      left: 0;
    }
  }

  .mainContainer {
    border: 2px solid black;
  }

  .activitiesHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    width: 300px;

    h2 {
      margin-top: 15px;
      color: var(--grey-100);
    }
    button {
      background: none;
      font-size: 25px;
      margin-top: 20px;
    }
  }

  .activitiesContainer {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  /* 
  .PrincipalBody {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
  } */

  .Wave {
    opacity: 1;
    width: 250px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .btn-container {
    margin-top: 20px;
  }

  .ButtonCreate {
    display: none;

    width: 500px;
    margin: 15px auto;
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column-reverse;

    .activitiesHeader {
      display: none;
    }

    .PrincipalContainer {
      width: 700px;
      margin-bottom: 82px;
      background: var(--grey-0);
    }

    .PrincipalBody {
      width: 560px;
      align-items: flex-start;
    }
    .Modules {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-start;

      p {
        width: 295px;
        font-size: 20px;
        margin: 15px 20px 15px 20px;
      }
    }

    .Wave {
      display: none;
    }

    .ButtonCreate {
      display: flex;

      button {
        width: 300px;
      }
    }
  }
`;

export default ActivityPage;
