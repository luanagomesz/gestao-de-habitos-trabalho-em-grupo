import { ListContainer } from "./style";

const itemList = ({ spanText, name, category, realizationTime, isVisible }) => {

  return (
    <ListContainer>
      {/* essa section vai ser criada com o map da lista de Goals/habits ou activities */}
      <div className="headerItem">
        {isVisible ? (
          <p>{realizationTime}</p>
        ) : (
          <>
            <p>{name}</p>
            <p>{category}</p>
          </>
        )}
      </div>

      <div className="info-container-text">
        <span>{spanText}</span>
        <span>{spanText}</span>
      </div>
    </ListContainer>
  );
};

export default itemList;
