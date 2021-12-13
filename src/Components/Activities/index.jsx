import ActivityPage from "./style";
import Yoga from "../../assets/img/Yoga.png";
import { BsClipboardPlus } from "react-icons/bs";
import Header from "../Header";
import { useContext } from "react";
import { ActivitiesContext } from "../../Provider/Activities/activities";
import MyModal from "./MyModal";
import Vetor from "../../assets/img/Vector-activities.png";
function Activities() {
  const { openModal, setOpenModal, level, setLevel } =
    useContext(ActivitiesContext);

  return (
    <>
      <Header backgroundColor={"var(--ligthblue)"} />
      <ActivityPage>
        <div className="PrincipalContainer">
          <div className="PrincipalHeader">
            <h2>Activities</h2>
            <button onClick={() => setOpenModal(true)}>
              <BsClipboardPlus />
            </button>
          </div>

          <div className="PrincipalBody">
            <div className="Modules">
              <p>Activity #1</p>
              <div>
                <h4>Difficulty</h4>
                <h4>Relization Time</h4>
              </div>
            </div>
            <div className="Modules">
              <p>Activity #2</p>
              <div>
                <h4>Difficulty</h4>
                <h4>Relization Time</h4>
              </div>
            </div>
            <div className="Modules">
              <p>Activity #4</p>
              <div>
                <h4>Difficulty</h4>
                <h4>Relization Time</h4>
              </div>
            </div>
          </div>
        </div>
        {openModal ? (
          <>
            <MyModal
              title={"New Activity"}
              text={"How hard is it to keep this Goal?"}
            />
            <aside>
              <img className="Yoga" src={Yoga} alt="yoga-girl" />
            </aside>
          </>
        ) : (
          <img className="Wave" src={Vetor} alt="vetor" />
        )}
      </ActivityPage>
    </>
  );
}

export default Activities;
