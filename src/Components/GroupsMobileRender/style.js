import styled from "styled-components";

export const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: 900px) {
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerCreate = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  background-color: #e5e3ff;
  @media (max-width: 900px) {
    display: flex;
  }
  .stateButton {
    background-color: var(--purple);
    color: var(--white);
    padding: 5px 15px;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 15px;
    cursor: pointer;
    :hover {
      background-color: var(--white);
      border: 1px solid var(--purple);
      color: var(--purple);
    }
  }
  .vector {
    position: fixed;
    float: left;
    left: 0px;
    bottom: 0px;
    display: none;
  }
  img {
    width: 200px;
  }
  h1 {
    color: var(--purple);
    font-weight: normal;
    margin-bottom: 10px;
    font-size: 25px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 20px 0px 20px;
    border: 1px solid var(--grey-50);
    border-radius: 8px;
    input {
      margin-bottom: 20px;
      border: 1px solid var(--grey-50);
      border-radius: 5px;
      font-size: 20px;
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
      padding: 10px 0px 20px 5px;
      width: 100%;
      ::placeholder {
        color: var(--grey-50);
        font-size: 20px;
      }
    }
    button {
      color: var(--white);
      background-color: var(--purple);
      border-radius: 5px;
      font-size: 20px;
      padding: 5px 10px;
      width: 70%;
      margin-bottom: 10px;
    }
  }
`;

export const ContainerGroups = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 900px) {
    display: flex;
  }
  .stateButton {
    background-color: var(--purple);
    color: var(--white);
    padding: 5px 25px;
    border-radius: 5px;
    margin-top: 10px;
    z-index: 5;
    cursor: pointer;
    :hover {
      background-color: var(--white);
      border: 1px solid var(--purple);
      color: var(--purple);
    }
  }
  .vector {
    position: fixed;
    float: left;
    left: 0px;
    bottom: 0px;
    width: 300px;
  }
  h1 {
    color: var(--purple);
    font-weight: normal;
    margin-bottom: 10px;
  }
  .containerLista {
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 2px solid var(--grey-50);
    border-radius: 10px;
    width: 70%;
    max-height: 550px;
    max-width: 550px;

    min-width: 320px;
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
      @media (max-width: 900px) {
        display: none;
      }

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
      height: 250px;
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
        .category {
          display: block;
          @media (max-width: 900px) {
            display: none;
          }
        }
        button {
          background-color: var(--ligthpurple);
          color: var(--white);
          padding: 3px 5px;
          border-radius: 5px;
          @media (max-width: 900px) {
            font-size: 14px;
            padding: 3px 3px;
          }
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
      width: 60%;
      border-radius: 10px;
      border: 1px solid var(--grey-50);
      ::placeholder {
        color: var(--grey-50);
      }
    }
    button {
      margin-left: 10px;
      padding: 5px 5px;
      border-radius: 5px;
      color: var(--white);
      background-color: var(--purple);
      font-size: 15px;
      cursor: pointer;
      :hover {
        color: var(--purple);
        background-color: var(--white);
      }
    }
  }
`;
