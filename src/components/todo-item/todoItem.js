import React from "react";
import "./styles.css";

const TodoItem = ({ onDelete, item }) => {
  return (
    <div className="todo-li">
      <li>
        <div className="todo-li-fly">
          <img
            id="todo-li-fly-img"
            src="https://www.clipartmax.com/png/middle/59-592453_superman-flying-comments-superman-icon-png.png"
            alt="hero"
          />
        </div>

        {item.value}
      </li>
      <button className="todo-trash-button">
        <img
          className="todo-trash-button-icon"
          src="https://cdn.onlinewebfonts.com/svg/img_569538.png"
          alt="hero-simbol"
          onClick={() => onDelete(item.id)}
        />
      </button>
    </div>
  );
};

export default TodoItem;
