import Header from "../../Components/Header";
import List from "../../Components/List";
import Modal from "../../Components/Modal";

import imgWorkout from "../../assets/img/image-habits/image-habits-workout.png";
import imgGoZen from "../../assets/img/image-habits/image-habits-goZen.png";
import imgHobbies from "../../assets/img/image-habits/image-habits-hobbies.png";
import imgHomeCare from "../../assets/img/image-habits/image-habits-homeCare.png";
import imgFooter from "../../assets/img/image-habits/vector-habits.png";
import { MainContainer } from "./style";
import { Footer } from "./style";
import { useState } from "react";

function Habits({ history }) {
  //ao clicar no botão vai setar o obj com o valor category
  //do botão e abrir o modal para terminar de config o obj

  //no mobile vai mostrar na pag1 apenas a lista, e ao clicar em addnewhabit
  //abre a pagina 2

  const [toggle, setToggle] = useState(false);

  const onClickFunction = () => {
    setToggle(true);
  };

  return (
    <>
      <Header backgroundColor={"var(--red)"} />
      {toggle ? <Modal className="modal"></Modal> : <></>}
      <MainContainer>
        <div className="containerLeft">
          <h1>Habits</h1>
          <h3>Choose a category and add a new habit</h3>
          <section>
            <div
              className="button1"
              value={"Workout"}
              onClick={onClickFunction}
            >
              <img src={imgWorkout} alt="imgWorkout" />
              <p>Workout</p>
            </div>
            <div className="button2">
              <img src={imgGoZen} alt="imgGoZen" />
              <p>Go Zen</p>
            </div>
            <div className="button3">
              <img src={imgHobbies} alt="imgHobbies" />
              <span>Hobbies</span>
            </div>
            <div className="button4">
              <img src={imgHomeCare} alt="imgHomeCare" />
              <span>Home Care</span>
            </div>
          </section>
        </div>
        <div className="containerRight">
          <List
            title={"Habits"}
            spanText={"Habit #1"}
            topic={"Difficulty"}
          ></List>
        </div>
      </MainContainer>
      <Footer>
        <img className="vector" src={imgFooter} alt="vector-habits" />
      </Footer>
    </>
  );
}

export default Habits;