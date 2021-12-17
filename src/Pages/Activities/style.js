import styled from "styled-components";

const ActivityPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .modalContainer {
  }

  .listContainer {
    height: 420px;
    margin-top: 20px;
    border: none;
    border-radius: 10px;
  }

  .activitiesContainer {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
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

  .activitList {
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
  }

  .btn-container {
    margin-top: 20px;
  }

  .Wave {
    opacity: 1;
    width: 250px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .img-container {
    display: none;
  }

  .modules {
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: flex-start;

    div {
      margin: 0 auto;
      width: 250px;
      height: 40px;
      p{
        margin:0;
      }
    }

    button {
      background: none;
      font-size: 25px;
      top:15px;
    }

    li {
      height: 35px;
      margin-bottom:75px;
      width: 70%;
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .Modal {
      background: #a66a8c47;
      width: 50vw;
      height: 100vh;
    }

    .List {
      width: 50vw;
      height: 100vh;
    }
    .modalContainer {
      margin: 17vh auto;
    }
    .modules {
      display: flex;
      width: 100vh;
      padding: 5px;

      p {
        width: 10vw;
      }

      div {
        margin: 0 auto;
        width: 350px;
        height: 35px;
      }

      button {
        background: none;
        font-size: 25px;
      }

      li {
        height: 0px;
        width: 70%;
      }
    }

    .listContainer {
      margin: 10vh auto;
    }

    .activitiesContainer {
      margin: 10vh auto;
    }

    .activitList {
      width: 750px;
      height: 28vh;
    }

    .btn-container {
      display: none;
    }

    .Wave {
      display: none;
    }

    .img-container {
      display: flex;
      margin: 15px;
    }
  }
`;

export default ActivityPage;
