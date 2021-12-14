import Header from "../../Components/Header";
import {
  ContainerPage,
  ContainerContent,
  ContainerGroups,
  ContainerCreate,
} from "./style";
import searchImg from "../../assets/img/PesquisaGroups.png";
import GroupsImg from "../../assets/img/GroupsImg.png";
import { LoginContext } from "../../Provider/Login/Login";
import { useContext } from "react";
import { GroupsContext } from "../../Provider/Groups/groups";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Groups({ history }) {
  const { authorization, username } = useContext(LoginContext);
  const { setSearch, setGroupId, groups, joinGroup, searchGroup, handlePage } =
    useContext(GroupsContext);

  return (
    <ContainerPage>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header backgroundColor={"var(--purple)"}></Header>
      <ContainerContent>
        <ContainerCreate>
          <img src={GroupsImg} alt="" srcset="" />
          <h1>Create a new group</h1>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Category" />
            <textarea placeholder="Description" />
            <button>Create</button>
          </form>
        </ContainerCreate>
        <ContainerGroups>
          <h1>Groups</h1>
          <div className="containerLista">
            <form className="search">
              <input
                value={searchGroup}
                type="text"
                onChange={(e) => setSearch(e.target.value)}
              />
              <img src={searchImg} alt="" srcset="" />
            </form>

            <div className="lista">
              <div className="description">
                <p>Name</p> <p>Category</p>
              </div>
              {groups.length > 0
                ? groups.map((item) => (
                    <div
                      className="groups"
                      id={item.id}
                      key={item.id}
                      creator={item.creator.id}
                    >
                      <p>{item.name}</p>
                      <p>{item.category}</p>
                      <button
                        onClick={() => {
                          setGroupId(item.id);
                          history.push("/Activities");
                        }}
                      >
                        Activities
                      </button>
                      <button
                        onClick={() => {
                          setGroupId(item.id);
                          history.push("/Goals");
                        }}
                      >
                        Goals
                      </button>
                      <button
                        onClick={() => {
                          joinGroup(item.name, item.id);
                        }}
                      >
                        Join group
                      </button>
                    </div>
                  ))
                : ""}
            </div>
            <div className="page">
              <FiArrowLeft
                className="icon"
                onClick={() => {
                  setSearch("");
                  handlePage("previous");
                }}
              />
              <FiArrowRight
                className="icon"
                onClick={() => {
                  setSearch("");
                  handlePage("next");
                }}
              />
            </div>
          </div>
        </ContainerGroups>
      </ContainerContent>
    </ContainerPage>
  );
}

export default Groups;
