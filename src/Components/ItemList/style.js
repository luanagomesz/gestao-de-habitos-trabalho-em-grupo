import styled from "styled-components";

export const ListContainer = styled.li`
  width: 300px;
  height: 90px;
  list-style: none;
  .close {
    position: absolute;
    right: 110px;
    margin-top: 6px;
  }
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
`;
