import Header from "../../Components/Header";
import ModalHabits from "../../Components/ModalHabits";

import imgWorkout from "../../assets/img/image-habits/image-habits-workout.png";
import imgGoZen from "../../assets/img/image-habits/image-habits-goZen.png";
import imgHobbies from "../../assets/img/image-habits/image-habits-hobbies.png";
import imgHomeCare from "../../assets/img/image-habits/image-habits-homeCare.png";
import imgFooter from "../../assets/img/image-habits/vector-habits.png";
import { MainContainer, ContainerMenuCategory, Footer } from "./style";
import { useState } from "react";

function Habits({ history }) {
  const [newCategory, setNewCategory] = useState("");

  //no mobile vai mostrar na pag1 apenas a lista, e ao clicar em addnewhabit
  //abre a pagina 2

  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const onClickFunction = (category) => {
    setToggle(true);
    setNewCategory(category);
  };

  return (
    <>
      {/* <Header backgroundColor={"var(--red)"} /> */}
      {toggle && (
        <ModalHabits
          className="modal"
          category={newCategory}
          setToggle={setToggle}
        ></ModalHabits>
      )}

      <MainContainer>
        {toggleMenu && (
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
        )}

        <div className="containerList">
          <ul>
            <div className="list-header">
              <h1>list</h1>
            </div>

            <section className="info-container">
              <p>list</p>
              <div className="info-container-text">
                <span>list</span>
                <span>list</span>
              </div>
            </section>

            <button onClick={setToggle(true)}></button>
          </ul>
        </div>

      </MainContainer>

      <Footer>
        <img className="vector" src={imgFooter} alt="vector-habits" />
      </Footer>
    </>
  );
}

export default Habits;
