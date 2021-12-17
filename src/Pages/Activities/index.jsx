import ActivityPage from "./style";
import Yoga from "../../assets/img/Yoga.png";
import { BsClipboardPlus } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import Header from "../../Components/Header";
import { useContext, useState, useEffect } from "react";
import { ActivitiesContext } from "../../Provider/Activities/activities";
import MyModal from "./ModalActivies";
import Vetor from "../../assets/img/Vector-activities.png";
import { LoginContext } from "../../Provider/Login/Login";
import Button from "../../Components/Button";
import { GroupsContext } from "../../Provider/Groups/groups";
import api from "../../Services/api";
import ItemList from "../../Components/ItemList";

function Activities() {
  const { openModal, setOpenModal, activity, setActivity } =
    useContext(ActivitiesContext);

  const { authorization } = useContext(LoginContext);
  const { GroupId } = useContext(GroupsContext);
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  useEffect(() => {
    if (width > 900) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  }, [width]);

  const deleteActivity = (id) => {
    api
      .delete(`/activities/${id}/`, authorization)
      .then((response) => {
        getItem();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api
      .get(`/activities/?group=${GroupId}`, authorization)
      .then((response) => {
        setActivity(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const getItem = () => {
    api
      .get(`/activities/?group=${GroupId}`, authorization)
      .then((response) => {
        setActivity(response.data.results);
      })
      .catch((err) => console.log(err));
  };

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
        <div className="Modal">
          <div className="modalContainer">
            {openModal && <MyModal title={"New Activity"} />}
          </div>
        </div>
        <div className="List">
          <div className="listContainer">
            <div className="activitiesContainer">
              <h2>Activities</h2>
              <div className="activitList">
                <div className="activitiesHeader"></div>
                {activity.length > 0 &&
                  activity.map((item, index) => (
                    <div className="modules">
                      <button onClick={() => deleteActivity(item.id)}>
                        <RiDeleteBinLine />
                      </button>
                      <ItemList
                        key={index}
                        color={"var(--purple)"}
                        name={item.title}
                        realizationTime={item.realization_time}
                        isVisible={"false"}
                        requirementTitle={"Realization Time"}
                      />
                    </div>
                  ))}
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
              <div className="img-container">
                <img src={Yoga} alt={"activities-img"} />
              </div>
            </div>
          </div>

          <footer>
            {!openModal && <img className="Wave" src={Vetor} alt="vetor" />}
          </footer>
        </div>
      </ActivityPage>
    </>
  );
}

export default Activities;
