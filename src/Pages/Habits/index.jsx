import Header from "../../Components/Header";
import ModalHabits from "../../Components/ModalHabits";
import ItemList from "../../Components/ItemList";
import imgWorkout from "../../assets/img/image-habits/image-habits-workout.png";
import imgGoZen from "../../assets/img/image-habits/image-habits-goZen.png";
import imgHobbies from "../../assets/img/image-habits/image-habits-hobbies.png";
import imgHomeCare from "../../assets/img/image-habits/image-habits-homeCare.png";
import imgFooter from "../../assets/img/image-habits/vector-habits.png";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { HabitsContext } from "../../Provider/Habits/habits";
import {
  MainContainer,
  ContainerMenuCategory,
  ContainerList,
  Footer,
  ContainerAll,
} from "./style";
import { AiOutlineClose } from "react-icons/ai";
import api from "../../Services/api";
import { LoginContext } from "../../Provider/Login/Login";
function Habits() {
  const [newCategory, setNewCategory] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleList, setToggleList] = useState(true);
  const { authorization } = useContext(LoginContext);
  const { habitsList, showHabits } = useContext(HabitsContext);
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  const onClickFunction = (category) => {
    setToggle(true);
    setNewCategory(category);
  };

  const buttonFunction = () => {
    setToggleMenu(true);
    setToggleList(false);
  };

  useEffect(() => {
    if (width > 900) {
      setToggleMenu(true);
      setToggleList(true);
    }
  });

  useEffect(() => {
    if (width > 900) {
      setToggleMenu(true);
      setToggleList(true);
    } else if (window.innerWidth < 900) {
      setToggleMenu(false);
      setToggleList(true);
    }
  }, [width]);

  const deleteHabit = (id) => {
    api
      .delete(`/habits/${id}/`, authorization)
      .then((response) => {
        showHabits();
      })
      .catch((err) => console.log(err));
  };

  const fixVeryHard = (difficulty) => {
    if (difficulty === "very_hard") {
      return "very hard";
    } else {
      return difficulty;
    }
  };

  return (
    <ContainerAll>
      <Header
        backgroundColor={"var(--red)"}
        page1={"Dashboard"}
        page2={"Groups"}
        history1={"dashboard"}
        history2={"groups"}
      />

      {toggle && (
        <ModalHabits
          className="modal"
          category={newCategory}
          setToggle={setToggle}
          setToggleMenu={setToggleMenu}
          setToggleList={setToggleList}
        ></ModalHabits>
      )}

      <MainContainer>
        {toggleMenu === true ? (
          <ContainerMenuCategory>
            <h1>Habits</h1>
            <h3>Choose a category and add a new habit</h3>
            <section>
              <div
                className="button1"
                onClick={() => onClickFunction("Workout")}
              >
                <img src={imgWorkout} alt="imgWorkout" />
                <p>Workout</p>
              </div>

              <div
                className="button2"
                onClick={() => onClickFunction("Go Zen")}
              >
                <img src={imgGoZen} alt="imgGoZen" />
                <p>Go Zen</p>
              </div>

              <div
                className="button3"
                onClick={() => onClickFunction("Hobbies")}
              >
                <img src={imgHobbies} alt="imgHobbies" />
                <p>Hobbies</p>
              </div>
              <div
                className="button4"
                onClick={() => onClickFunction("Home Care")}
              >
                <img src={imgHomeCare} alt="imgHomeCare" />
                <p>Home Care</p>
              </div>
              <button
                className="renderButton"
                onClick={() => {
                  setToggleMenu(false);
                  setToggleList(true);
                }}
              >
                My Habits
              </button>
            </section>
          </ContainerMenuCategory>
        ) : (
          ""
        )}
        {toggleList === true ? (
          <ContainerList>
            <div className="list">
              <h2>Habits</h2>
              <div className="habits">
                {habitsList.map((habit) => {
                  return (
                    <ul className="card">
                      <ItemList
                        name={habit.title}
                        requirementTitle={"Frequency"}
                        requirementValue={habit.frequency}
                        difficultyValue={fixVeryHard(habit.difficulty)}
                        category={habit.category}
                        color={"var(--orange)"}
                        className="list"
                      ></ItemList>
                      <AiOutlineClose
                        className="close"
                        id={habit.id}
                        size={20}
                        onClick={() => deleteHabit(habit.id)}
                      />
                    </ul>
                  );
                })}
              </div>
              <button className="renderButton" onClick={buttonFunction}>
                Add new Habit
              </button>
            </div>
            <img src={imgWorkout} alt="imgWorkout" className="imgRight" />
          </ContainerList>
        ) : (
          ""
        )}
        <Footer>
          <img className="vector" src={imgFooter} alt="vector-habits" />
        </Footer>
      </MainContainer>
    </ContainerAll>
  );
}

export default Habits;
