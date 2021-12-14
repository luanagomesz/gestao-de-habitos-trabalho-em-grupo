import { createContext, useState, useContext, useEffect } from "react";
import { LoginContext } from "../Login/Login";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setgroups] = useState([]);
  const [page, setPage] = useState(1);
  const [searchGroup, setSearch] = useState("");
  const [GroupId, setGroupId] = useState(""); // valor a ser usado para requisições como group_id no activities e goals
  const { authorization, username } = useContext(LoginContext);

  const request = (action) => {
    if (searchGroup.length > 0) {
      axios
        .get(
          `https://kenzie-habits.herokuapp.com/groups/?search=${searchGroup}`,
          "",
          authorization
        )
        .then((response) => {
          console.log(response);
          setgroups(response.data.results);
        });
    } else {
      axios
        .get(
          `https://kenzie-habits.herokuapp.com/groups/?page=${page}`,
          "",
          authorization
        )
        .then((response) => {
          console.log(response);
          setgroups(response.data.results);
        });
    }
  };

  const handlePage = (value) => {
    if (value === "next") {
      setPage(page + 1);
    } else {
      if (page > 1) {
        setPage(page - 1);
      }
    }
  };
  const setGroup = (id) => {
    setGroupId(id);
  };

  const joinGroup = (group, id) => {
    console.log(authorization);
    axios
      .post(
        `https://kenzie-habits.herokuapp.com/groups/${id}/subscribe/`,
        "",
        authorization
      )
      .then((response) => {
        console.log(response);

        toast(`${username} Joined ${group}`);
      })
      .catch((err) => toast(`${username} Already is in ${group}`));
  };

  useEffect(() => {
    request();
  }, [page, searchGroup]);

  return (
    <GroupsContext.Provider
      value={{
        joinGroup,
        setGroup,
        request,
        setSearch,
        setGroupId,
        groups,
        searchGroup,
        handlePage,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
