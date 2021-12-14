import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 300px;
  height: 300px;
  border: solid var(--grey-50) 1px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 12px;
  position: absolute;
  right: 0;
  left: 0;
  background: white;

  h3{
    color: var(--grey-100);
    font-weight: 400;
  }

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

  p{
    color: var(--grey-50);
  }

  .buttonModal {
    width: 100%;
    background-color: var(--orange);
    padding: 10px;
    border-radius: 8px;
    color: white;
    margin: 10px 0;
  }

  .frequency,
  .difficulty {
    opacity: 0;
    position: absolute;
    width: 0;
  }

  .frequencyContainer,
  .difficultyContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .difficultyItem,
  .frequencyItem {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--orange);
    margin: 10px 0;
    padding: 10px;
    border-radius: 8px;
    width: 90%;
    font-size: 14px;
    color: white;
  }

  .difficultyItem:active, .frequencyItem:active{
    background-color: var(--red);
  }

  @media (min-width: 900px){
    width: 350px;
    right: 570px;
    left: 10px;
    top: 250px;
  }
`;
