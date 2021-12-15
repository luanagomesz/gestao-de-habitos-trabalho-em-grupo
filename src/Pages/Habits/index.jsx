import Header from "../../Components/Header";
import ModalHabits from "../../Components/ModalHabits";
import ItemList from "../../Components/ItemList";

import imgWorkout from "../../assets/img/image-habits/image-habits-workout.png";
import imgGoZen from "../../assets/img/image-habits/image-habits-goZen.png";
import imgHobbies from "../../assets/img/image-habits/image-habits-hobbies.png";
import imgHomeCare from "../../assets/img/image-habits/image-habits-homeCare.png";
import imgFooter from "../../assets/img/image-habits/vector-habits.png";
import {
  MainContainer,
  ContainerMenuCategory,
  ContainerList,
  Footer,
} from "./style";
import { useState, useEffect } from "react";

function Habits({ history }) {
  const [newCategory, setNewCategory] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleList, setToggleList] = useState(true);

  const onClickFunction = (category) => {
    setToggle(true);
    setNewCategory(category);
  };

  useEffect(() => {
    if (window.innerWidth > 900) {
      setToggleMenu(true);
    }
  })

  return (
    <>
      {<Header backgroundColor={"var(--red)"} />}
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
                  <span>Hobbies</span>
                </div>
                <div
                  className="button4"
                  onClick={() => onClickFunction("Home Care")}
                >
                  <img src={imgHomeCare} alt="imgHomeCare" />
                  <span>Home Care</span>
                </div>
              </section>
            </ContainerMenuCategory>
          </>
        )}
        {toggleList && (
          <ContainerList>
            <ul>
              <ItemList></ItemList>
              <button onClick={() => setToggleMenu(true)}>Add</button>
            </ul>
          </ContainerList>
        )}
      </MainContainer>

      <Footer>
        <img className="vector" src={imgFooter} alt="vector-habits" />
      </Footer>
    </>
  );
}

export default Habits;
