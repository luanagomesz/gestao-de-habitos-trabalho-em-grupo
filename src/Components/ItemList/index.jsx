import { ListContainer } from "./style";
import { AiOutlineClose } from "react-icons/ai";
const ItemList = ({
  requirementTitle,
  name,
  category,
  realizationTime,
  isVisible,
  difficultyValue,
  requirementValue,
  color,
}) => {
  return (
    <ListContainer color={color}>
      <div className="headerItem">
        <p>{name}</p>
        <p>{category}</p>
      </div>

      <div className="requirementContainer">
        {isVisible ? (
          <p>{requirementTitle}</p>
        ) : (
          <>
            <span>Difficulty</span>
            <span>{requirementTitle}</span>
          </>
        )}
      </div>
      <div className="valueContainer">
        {isVisible ? (
          <p>{realizationTime}</p>
        ) : (
          <>
            <span>{difficultyValue}</span>
            <span>{requirementValue}</span>
          </>
        )}
      </div>
      <AiOutlineClose className="close" />
    </ListContainer>
  );
};

export default ItemList;
