import "./App.css";
import React, {useState} from "react";
import TodosText from "./components/TodosText";
import InputText from "./components/InputText";
import TodoList from "./components/TodoList";
import Todos from "./configs/todos.json";

function App() {

  const [todos, setTodos] = useState(Todos.todo)

  return (
    <>
      <div className="center bg-color">
        <TodosText />
        <div className="bg-color-none">
          <InputText todos={todos} setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
}

export default App;
