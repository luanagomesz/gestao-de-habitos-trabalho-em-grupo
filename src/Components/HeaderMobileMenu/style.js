import styled from "styled-components";

export const ContainerMenu = styled.div`
  width: 180px;
  flex-direction: column;
  position: absolute;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-top: 60px;
  margin-left: -85px;
  z-index: 2;
  align-items: flex-end;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  animation-name: slide;
  animation-duration: 500ms;
  color: var(--white);
  @keyframes slide {
    0% {
      z-index: -1;
      margin-top: 0px;
      color: ${(props) => props.backgroundColor};
    }
    40% {
      z-index: -1;
    }
    100% {
      z-index: 2;
      margin-top: 60px;
      color: var(--white);
    }
  }
  @media (min-width: 900px) {
    display: none;
  }
  p {
    margin-right: 20px;

    font-size: 25px;
    margin-bottom: 10px;
    cursor: pointer;
    @media (min-width: 900px) {
      display: none;
    }
  }
`;
