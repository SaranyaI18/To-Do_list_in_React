import React from "react";

function todolist(props) {
  return (
    <li
      onClick={() => {
        return props.lochecked(props.id);
      }}
    >
      {props.value}{" "}
    </li>
  );
}

export default todolist;
