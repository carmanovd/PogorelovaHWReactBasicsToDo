import React from "react";
import "./styles.css";

class Input extends React.Component {
  state = {
    inputValue: "",
  };

  addTask = () => {
    const { inputValue } = this.state;
    const { addNewTask } = this.props;

    const newTask = { id: Math.random(), value: inputValue };
    addNewTask(newTask);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <div className="add-new">
        <div className="add-new-icon">
          <img
            src="https://thumbs.dreamstime.com/b/superhero-hero-icon-element-mobile-concept-web-apps-detailed-can-be-used-gray-background-129495410.jpg"
            alt=""
          />
        </div>
        <div className="add-new-legend">ADD NEW SUPERHERO-TASK:</div>
        <div className="add-new-todo">
          <input
            className="add-new-todo-input"
            placeholder="type here if the world is in danger..."
            type="text"
            value={this.state.inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
          />
        </div>
        <button className="add-new-todo-button" onClick={this.addTask}>
          Click to add
        </button>
      </div>
    );
  }
}

export default Input;
