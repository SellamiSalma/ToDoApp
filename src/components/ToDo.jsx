import { useState } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";
import Footer from "./Footer";
export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos}></Form>
      <ToDoList todos={todos} setTodos={setTodos}></ToDoList>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos}></Footer>
    </div>
  );
}