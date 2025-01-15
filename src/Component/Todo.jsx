import React, { useState } from "react";
import TodoList from "./TodoList";
import TaskInput from "./TaskInput";

function Todo({ isNightMode }) {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");

  const addTodo = (task) => {
    if (editIndex === -1) {
      setTodos([...todos, task]);
    } else {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? task : todo
      );
      setTodos(updatedTodos);
      setEditIndex(-1);
    }
    setEditText("");
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div
      className={`w-1/2  border rounded shadow-lg ${
        isNightMode ? "text-white" : "text-gray-900"
      }`}
    >
      <TaskInput
        isNightMode={isNightMode}
        addTodo={addTodo}
        editText={editText}
        setEditText={setEditText}
      />
      <TodoList
        isNightMode={isNightMode}
        todos={todos}
        startEdit={startEdit}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default Todo;
