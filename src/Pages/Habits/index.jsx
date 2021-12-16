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
} from "./style";

function Habits() {
  const [newCategory, setNewCategory] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleList, setToggleList] = useState(true);

  const { habitsList } = useContext(HabitsContext);

  const onClickFunction = (category) => {
    setToggle(true);
    setNewCategory(category);
  };

  useEffect(() => {
    if (window.innerWidth > 900) {
      setToggleMenu(true);
    }
  });

  return (
    <>
      {
        <Header
          backgroundColor={"var(--red)"}
          page1={"Dashboard"}
          page2={"Groups"}
          history1={"dashboard"}
          history2={"groups"}
        />
      }
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
        {toggleMenu && (
          <>
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
              </section>
            </ContainerMenuCategory>
          </>
        )}

        <ContainerList>
          {toggleList && (
            <>
              {habitsList.map((habit) => {
                console.log(habit);
                return (
                  <ItemList
                    name={habit.title}
                    requirementTitle={"Frequency"}
                    requirementValue={habit.frequency}
                    difficultyValue={habit.difficulty}
                    category={habit.category}
                    color={"var(--orange)"}
                  ></ItemList>
                );
              })}
              <li>teste</li>
              <button onClick={() => setToggleMenu(true)}>add</button>
            </>
          )}
          <img src={imgWorkout} alt="imgWorkout" className="imgRight"/>
        </ContainerList>
        <Footer>
          <img className="vector" src={imgFooter} alt="vector-habits" />
        </Footer>
      </MainContainer>
    </>
  );
}

export default Habits;
