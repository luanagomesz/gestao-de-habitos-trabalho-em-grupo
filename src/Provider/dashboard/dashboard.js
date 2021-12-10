import { createContext, useState } from "react";

export const DashboardContext = createContext([]);

export const DashboardProvider = ({ children }) => {
  const [inputTodo, setInput] = useState("");
  const [todolength, setLength] = useState(0);

  const Checked = (id) => {
    const div = document.getElementById(id);
    const input = div.children[1];
    const label = div.children[0];
    if (input.checked === false) {
      div.setAttribute("class", "divSelected");
      label.setAttribute("class", "labelSelected");
      input.checked = true;
    } else {
      input.checked = false;
      div.setAttribute("class", "");
      label.setAttribute("class", "");
    }
  };

  const addToDo = () => {
    const box = document.getElementById("box");
    const div = document.createElement("div");
    const label = document.createElement("label");
    label.innerHTML = inputTodo;
    div.appendChild(label);
    const input = document.createElement("input");
    input.id = "todo" + todolength;
    input.type = "checkbox";
    input.name = "todo" + todolength;
    div.id = "todoDiv" + todolength;
    div.addEventListener("click", () => {
      Checked(div.id);
    });
    div.appendChild(input);
    box.appendChild(div);
  };

  return (
    <DashboardContext.Provider
      value={{ Checked, addToDo, setInput, setLength, todolength }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
