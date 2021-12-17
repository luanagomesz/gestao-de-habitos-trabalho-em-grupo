import Header from "../../Components/Header";
import { GoalsContainer } from "./style";
import ItemList from "../../Components/ItemList";
import { GoalsContext } from "../../Provider/goals/goals";
import { useContext, useEffect, useState } from "react";
import vector from "../../assets/img/image-goals/Vector 1.png";
import Modal from "../../Components/ModalGoals/index";
import goalsImg from "../../assets/img/image-goals/Personal goals-amico 1.png";
import { AiOutlineClose } from "react-icons/ai";
import api from "../../Services/api";
import { LoginContext } from "../../Provider/Login/Login";
const Goals = ({ history }) => {
  const { goalsList, showList } = useContext(GoalsContext);
  const { authorization } = useContext(LoginContext);
  const [toggle, setToggle] = useState(true);
  const [toggleModal, setToggleModal] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  useEffect(() => {
    if (width > 900) {
      setToggleModal(true);
    } else {
      setToggleModal(false);
    }
  }, [width]);

  const addGoal = () => {
    setToggleModal(true);
  };

  const deleteGoals = (id) => {
    api
      .delete(`/goals/${id}/`, authorization)
      .then((response) => {
        console.log(response);
        showList();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header
        backgroundColor={"var(--orange)"}
        page1={"Habits"}
        page2={"Dashboard"}
        page3={"Groups"}
        history1={"habits"}
        history2={"dashboard"}
        history3={"groups"}
      />
      <GoalsContainer>
        {toggleModal && (
          <div className="modal-container">
            <Modal />
          </div>
        )}
        {toggle && (
          <div className="list-container">
            <h1>Goals</h1>
            <ul>
              {goalsList.map((item) => (
                <div>
                  <ItemList
                    key={item.id}
                    color={"var(--red)"}
                    name={item.title}
                    requirementTitle={"Status"}
                    difficultyValue={item.difficulty}
                    requirementValue={item.achieved}
                  />
                  <AiOutlineClose
                    onClick={() => deleteGoals(item.id)}
                    className="close"
                  />
                </div>
              ))}
            </ul>
            <button className="btn-add" onClick={addGoal}>
              Add New Goal
            </button>
            <div className="img-container">
              <img src={goalsImg} alt="goals" />
            </div>
          </div>
        )}
      </GoalsContainer>
    </>
  );
};

export default Goals;
