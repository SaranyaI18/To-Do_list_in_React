import React, { useState } from "react";
import "./styles.css";
import Todolist from "./todo.js";

export default function App() {
  const [value, setvalue] = useState("");
  const [items, setitem] = useState([]);

  function store(event) {
    const inputValue = event.target.value;
    setvalue(inputValue);
  }

  function addtolist() {
    setitem((prevValue) => {
      return [...prevValue, value];
    });
    setvalue("");
  }

  function checked(id) {
    setitem((prevValue) => {
      return prevValue.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input type="text" name="do-item" value={value} onChange={store} />
      <button onClick={addtolist}>Add</button>

      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <Todolist
                lochecked={checked}
                id={index}
                key={index}
                value={item}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
