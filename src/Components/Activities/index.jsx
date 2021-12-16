import ActivityPage from "./style";
import Yoga from "../../assets/img/Yoga.png";
import { BsClipboardPlus } from "react-icons/bs";
import Header from "../Header";
import { useContext, useState, useEffect } from "react";
import { ActivitiesContext } from "../../Provider/Activities/activities";
import MyModal from "./MyModal";
import Vetor from "../../assets/img/Vector-activities.png";
import { LoginContext } from "../../Provider/Login/Login";
import Button from "../Button";
import { GroupsContext } from "../../Provider/Groups/groups";
import api from "../../Services/api";
import ItemList from "../ItemList";

function Activities() {
  const { openModal, setOpenModal, activity, setActivity } =
    useContext(ActivitiesContext);

  const { authorization } = useContext(LoginContext);
  const { GroupId } = useContext(GroupsContext);

  useEffect(() => {
    api
      .get(`/activities/?group=${GroupId}`, authorization)
      .then((response) => {
        setActivity(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header
        backgroundColor={"var(--ligthblue)"}
        page1={"Groups"}
        page2={"Goals"}
        page3={"Habits"}
        history1={"groups"}
        history2={"goals"}
        history3={"habits"}
      />

      <ActivityPage>
        <div className="modalContainer">
          {openModal && <MyModal title={"New Activity"} />}
        </div>

        <div className="listContainer">
          <img src={Yoga} alt="yoga-girl" />

          <div className="activitiesContainer">
            <div className="activitiesHeader">
              <h2>Activities</h2>
              <button onClick={() => setOpenModal(true)}>
                <BsClipboardPlus />
              </button>
            </div>

            {activity.length > 0 &&
              activity.map((item, index) => (
                <ItemList
                  key={index}
                  color={"var(--purple)"}
                  name={item.title}
                  realizationTime={item.realization_time}
                  isVisible={"false"}
                  requirementTitle={"Realization Time"}
                />
              ))}
          </div>
        </div>
        <div className="btn-container">
          <Button
            onClick={() => setOpenModal(true)}
            background={"var(--purple)"}
            width={"230px"}
          >
            Add a new activity
          </Button>
        </div>
        <footer>
          <img className="Wave" src={Vetor} alt="vetor" />
        </footer>
      </ActivityPage>
    </>
  );
}

export default Activities;
