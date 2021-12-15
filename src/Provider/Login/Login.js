import { createContext, useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const history = useHistory();
  const [authorization, setAuthorization] = useState({});
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setAuthorization({
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("authToken")}`,
      },
    });
  }, []);
  const submitLogin = (evt) => {
    evt.preventDefault();

    const login = {
      username: username,
      password: password,
    };
    console.log(login);
    axios
      .post("https://kenzie-habits.herokuapp.com/sessions/", login)
      .then((response) => {
        const jwt = jwt_decode(response.data.access);
        window.localStorage.clear();
        window.localStorage.setItem("id", JSON.stringify(jwt.user_id));
        window.localStorage.setItem("authToken", response.data.access);
        setToken(response.data.access);

        history.push("/dashboard");
        console.log(authorization);
      })
      .catch((err) => console.log("Login Fail"));
  };

  const clearLocalStorage = () => {
    window.localStorage.clear();
  };

  return (
    <LoginContext.Provider
      value={{
        submitLogin,
        authorization,
        username,
        setUsername,
        password,
        setPassword,
        clearLocalStorage,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
