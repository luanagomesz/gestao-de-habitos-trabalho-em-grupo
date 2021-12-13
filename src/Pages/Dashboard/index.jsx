import DashboardImg from "../../assets/img/dashboard.png";
import LogoutImg from "../../assets/img/image1.png";
import userIMG from "../../assets/img/user1.png";
import vectorDashboard from "../../assets/img/VectorDashboard.png";
import Habbit from "../../assets/img/Habbit.png";
import {
  ContainerContent,
  ContainerPage,
  Header,
  ContainerImg,
  ContainerFocus,
} from "./style";

//import Header from "../../Components/Header";
import { useContext } from "react";
import { DashboardContext } from "../../Provider/dashboard/dashboard";
function Dashboard({ history }) {
  const Response = { username: "Luana", email: "luanateste@gmail.com" };
  const { setInput, addToDo, setLength, todolength } =
    useContext(DashboardContext);

  return (
    <ContainerPage>
      <Header>
        <div className="logoContainer">
          <img className="logo" src={Habbit} alt="" srcset="" />
          <h1>Habbits</h1>
        </div>

        <div>
          <p className="text" onClick={() => history.push("/habits")}>
            Habits
          </p>
          <p className="text" onClick={() => history.push("/groups")}>
            Groups
          </p>
          <p className="text"> Welcome, {Response.username}</p>
          <img className="userImg" src={userIMG} alt="" srcset="" />
          <img
            onClick={() => history.push("/")}
            src={LogoutImg}
            alt=""
            srcset=""
          />
        </div>
      </Header>

      <ContainerContent>
        <ContainerFocus>
          <div id="box">
            <h1>What's your main focus today?</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addToDo();
                setLength(todolength + 1);
                e.target.children[0].value = "";
              }}
            >
              <input
                onChange={(e) => setInput(e.target.value)}
                id="newInput"
                type="text"
                placeholder="Add a new to-do"
              />
            </form>
          </div>
        </ContainerFocus>
        <ContainerImg>
          <img src={DashboardImg} alt="" srcset="" />
          <img className="vector" src={vectorDashboard} alt="" srcset="" />
        </ContainerImg>
      </ContainerContent>
    </ContainerPage>
  );
}

export default Dashboard;
