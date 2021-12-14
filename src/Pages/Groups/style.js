import styled from "styled-components";

export const ContainerPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const ContainerCreate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  justify-content: center;
  background-color: #e5e3ff;
  form {
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 20px;
      border: 1px solid var(--grey-50);
      border-radius: 5px;
      font-size: 25px;
      padding: 5px 5px;

      ::placeholder {
        color: var(--grey-50);
      }
    }
    textarea {
      margin-bottom: 20px;
      border: 1px solid var(--grey-50);
      border-radius: 5px;
      font-size: 15px;
      padding: 10px 0px 40px 5px;
      ::placeholder {
        color: var(--grey-50);
        font-size: 25px;
      }
    }
  }
`;

export const ContainerGroups = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .containerLista {
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 2px solid var(--grey-50);
    border-radius: 10px;
    width: 80%;
    max-height: 550px;
    max-width: 550px;
    min-height: 500px;
    .page {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      color: var(--purple);
      .icon {
        font-size: 30px;
        width: 50px;
        cursor: pointer;
        :hover {
          color: var(--ligthpurple);
        }
      }
    }

    .description {
      display: flex;
      align-items: center;

      width: 100%;
      margin-bottom: 0px;
      padding: 0 0px 5px 0px;
      border-bottom: 1px solid var(--grey-0);

      p:first-child {
        width: 20%;
        margin-left: 7%;
        font-variant: small-caps;
        font-weight: bold;
      }
      p:last-child {
        margin-left: 0%;
        width: 20%;
        font-variant: small-caps;
        font-weight: bold;
      }
    }
    .lista {
      margin-top: 0px;
      display: flex;
      flex-direction: column;
      width: 90%;
      height: 500px;
      align-items: center;
      justify-content: baseline;
      max-height: 500px;
      overflow-y: auto;
      .groups {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;

        border-bottom: 1px solid var(--grey-0);

        p {
          width: 90px;
          overflow-x: hidden;
          text-overflow: ellipsis;
          margin-bottom: 7px;
          margin-top: 7px;
          color: var(--grey-100);
        }
        button {
          background-color: var(--ligthpurple);
          color: var(--white);
          padding: 3px 10px;
          border-radius: 5px;
        }
      }
    }
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--ligthpurple);
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    height: 70px;
    margin-bottom: 20px;
    input {
      font-size: 20px;
      padding: 5px 5px;
      width: 70%;
      border-radius: 10px;
      border: 1px solid var(--grey-50);
      ::placeholder {
        color: var(--grey-50);
      }
    }
    img {
      margin-left: 20px;
      width: 50px;
    }
  }
`;
