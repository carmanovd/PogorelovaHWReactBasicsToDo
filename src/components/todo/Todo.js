import React, { useState } from "react";
import Input from "../input/Input";
import TodoItem from "../todo-item/todoItem";
import "./styles.css";

const Todo = () => {
  // [ { id: 0, value: 'first todo }, { id: 1, value: 'second todo' } ]
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  };

  const addNewTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="todo">
      <ul className="todo-list">
        <Input addNewTask={addNewTask} />
        {tasks.map((item) => (
          <TodoItem key={item.id} item={item} onDelete={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
