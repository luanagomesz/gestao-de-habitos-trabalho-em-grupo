import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 300px;
  height: 330px;
  border: solid var(--grey-50) 1px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 12px;

  .modalHeader {
    display: flex;
    justify-content: space-between;
  }

  .addNewHabit {
    margin: 10px 0;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid var(--grey-50);
  }

  .buttonModal {
    width: 100%;
    background-color: red; /* trocar por props */
    padding: 10px;
    border-radius: 5px;
    color: white;
  }

  /* .frequency,
  .difficulty {
    opacity: 0;
    position: absolute;
    width: 0;
  } */

  .frequencyContainer,
  .difficultyContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .difficultyItem,
  .frequencyItem {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red; /* trocar por props */
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    width: 90px;
    font-size: 14px;
    color: white;
  }
`;
