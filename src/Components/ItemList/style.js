import styled from "styled-components";

export const ListContainer = styled.li`
  width: 300px;
  height: 90px;
  list-style: none;
<<<<<<< HEAD
  .close {
    position: absolute;
    right: 110px;
    margin-top: 6px;
  }
=======
  background-color: var(--grey-0);
  align-items: center;

>>>>>>> 57fd86c5c0b81d6089330dea94971170f21bde03
  .headerItem {
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    height: 30px;
    background-color: ${(props) => props.color};
    align-items: center;
    color: white;
    font-weight: 400;
  }

  .headerItem p {
    margin: 0 20px;
    font-size: 18px;
  }

  .requirementContainer,
  .valueContainer {
    display: flex;
    justify-content: space-around;
    gap: 90px;
  }

  .requirementContainer span,
  .requirementContainer p {
    font-weight: bolder;
    font-size: 18px;
    margin: 5px 0;
    color: var(--grey-100);
  }

  .valueContainer span,
  .valueContainer p {
    font-weight: bold;
    color: ${(props) => props.color};
  }

  @media (min-width: 900px) {
    display: flex;
    gap: 20px;
    height: 77px;
    z-index: 1;

    .headerItem {
      width: 300px;
      height: 30px;
    }

    .containerLeft {
    }

    .containerRight {
      display: flex;
      flex-direction: column;
      background-color: var(--grey-0);
    }
  }
`;
