import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../actions/todoActions";

const TodoList = () => {
  const [todoText, setTodoText] = useState("");

  // Get todos from the Redux store
  const todos = useSelector((state) => state.todos);

  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Handle adding a new todo
  const handleAddTodo = () => {
    if (todoText.trim()) {
      const newTodo = {
        id: Date.now(),
        text: todoText,
      };
      dispatch(addTodo(newTodo));
      setTodoText("");
    }
  };

  // Handle removing a todo
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
