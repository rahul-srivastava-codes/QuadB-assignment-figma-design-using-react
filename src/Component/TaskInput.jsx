import React from "react";

const TaskInput = ({ addTodo, editText, setEditText, isNightMode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      addTodo(editText.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        className={`flex-grow border rounded p-2 w-full h-[20%] ${
          isNightMode ? "text-white" : "text-gray-900"
        }`}
        placeholder="Add a new task.."
      />
      <button
        type="submit"
        className={`ml-2 bg-blue-500 text-white px-4 py-2 rounded ${
          editText ? "text-white" : "text-gray-900"
        }`}
      >
        {editText ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default TaskInput;
