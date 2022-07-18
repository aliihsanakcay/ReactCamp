import React, { useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export const InputText = (props) => {
  const [newTodo, setNewTodo] = useState("");

  const addNewTodo = (event) => {
    event.preventDefault();
    props.setTodos([...props.todos, { text: newTodo, done: false }]);
    setNewTodo("");
  };

  const handleChange = (event) => {
    event.preventDefault();
    setNewTodo(event.target.value);
  };

  const isAllTodosCompleted = () => {
    let isAllCompleted = true;
    props.todos.forEach((todo) => {
      if (!todo.done) {
        isAllCompleted = false;
      }
    });
    return isAllCompleted;
  };

  const allTodosComplete = () => {
    if (isAllTodosCompleted()) {
      props.todos.forEach((todo) => {
        todo.done = false;
      });
    } else {
      props.todos.forEach((todo) => {
        todo.done = true;
      });
    }
    props.setTodos([...props.todos]);
  };

  return (
    <div className="inputText">
      <span className="p-12" onClick={allTodosComplete}>
        <ExpandMoreOutlinedIcon />
      </span>
      <form onSubmit={addNewTodo}>
        <input
          type="text"
          className="newTodo"
          placeholder="What needs to be done?"
          onChange={handleChange}
          autoFocus
          value={newTodo}
        />
      </form>
    </div>
  );
};

export default InputText;
