import React, { useState, useEffect } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./Styles.css";

export const TodoList = (props) => {
  const [allTodos, setAllTodos] = useState(true);
  const [activeTodos, setActiveTodos] = useState(false);
  const [completedTodos, setCompletedTodos] = useState(false);
  const [itemsLeft, setItemsLeft] = useState(0);

  useEffect(() => {
    setItemsLeft(0);
    props.todos.forEach((todo)=>{
      if(!todo.done){
        setItemsLeft(current => current+1);
      }
    });
    console.log(props.todos);
  }, [props.todos]);

  const checkTodo = (todo, key) => {
    props.setTodos(
      Object.values({ ...props.todos, [key]: { ...todo, done: !todo.done } })
    );
  };

  const deleteTodo = (key) => {
    props.setTodos((todos) =>
      todos.filter((_, index) => {
        return index !== key;
      })
    );
  };

  const allTodosFunc = () => {
    setAllTodos(true);
    setActiveTodos(false);
    setCompletedTodos(false);
  };

  const activeTodosFunc = () => {
    setAllTodos(false);
    setActiveTodos(true);
    setCompletedTodos(false);
  };

  const completedTodosFunc = () => {
    setAllTodos(false);
    setActiveTodos(false);
    setCompletedTodos(true);
  };

  const clearCompletedTodosFunc = () => {
    props.setTodos(todos => todos.filter((todo) => {
      return todo.done === false;
    }));
  };

  return (
    <>
      {props.todos.map((todo, key) => {
        if (todo.done && (allTodos || completedTodos)) {
          return (
            <div key={key} className="todoList borderBottom">
              <CheckCircleOutlineIcon
                onClick={() => checkTodo(todo, key)}
                className="todoIcon todoCheckIcon"
              />
              <div className="todoStyle completedTodo">{todo.text}</div>
              <CloseOutlinedIcon
                onClick={() => deleteTodo(key)}
                className="deleteIcon"
              />
            </div>
          );
        } else if (!todo.done && (allTodos || activeTodos)) {
          return (
            <div key={key} className="todoList borderBottom">
              <CircleOutlinedIcon
                onClick={() => checkTodo(todo, key)}
                className="todoIcon"
              />
              <div className="todoStyle">{todo.text}</div>
              <CloseOutlinedIcon
                onClick={() => deleteTodo(key)}
                className="deleteIcon"
              />
            </div>
          );
        } else {
          return "";
        }
      })}
      <div className="footer">
        <span>{itemsLeft} item(s) left</span>
        <div>
          <button onClick={allTodosFunc} className="footerButton">All</button>
          <button onClick={activeTodosFunc} className="footerButton">Active</button>
          <button onClick={completedTodosFunc} className="footerButton">Completed</button>
        </div>
        <button onClick={clearCompletedTodosFunc} className="footerButton">Clear completed</button>
      </div>
    </>
  );
};

export default TodoList;
