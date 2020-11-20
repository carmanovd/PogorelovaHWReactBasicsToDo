import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
