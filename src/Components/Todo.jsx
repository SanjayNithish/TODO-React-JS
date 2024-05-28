import React, { useState } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedTodo = [...todo];
      updatedTodo[editIndex] = input;
      setTodo(updatedTodo);
      setEditIndex(null);
    } else {
      setTodo([...todo, input]);
    }
    setInput("");
  };

  const handleClick = () => {
    setTodo([...todo, input]);
    setInput("");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setInput(todo[index]);
  };

  const handleDelete = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  };

  return (
    <div className="todo-app">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={input}
          placeholder="Enter the Todo"
          onChange={(e) => setInput(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>
      <div>
        <ul className="todo-list">
          {todo.map((list, index) => (
            <li key={index}>
              <span className="text">{list}</span>
              <div className="button-container">
                <button
                  onClick={() => handleEdit(index)}
                  className="icon-button"
                >
                  <FontAwesomeIcon icon={faEdit} className="icon" />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="icon-button"
                >
                  <FontAwesomeIcon icon={faTrashAlt} className="icon" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
