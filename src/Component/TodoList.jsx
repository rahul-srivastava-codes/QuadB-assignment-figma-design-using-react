import React from "react";

const TodoList = ({ todos, startEdit, deleteTodo, isNightMode }) => {
  return (
    <ul className="list-none p-0">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-2 border-b"
        >
          <span>{todo}</span>
          <div>
            <button
              onClick={() => startEdit(index)}
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
