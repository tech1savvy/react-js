import React, { useReducer, useState } from "react";

// Initial state for tasks
const initialState = {
  tasks: [],
};

// Action types
const ADD_TASK = "ADD_TASK";
const UPDATE_TASK = "UPDATE_TASK";
const DELETE_TASK = "DELETE_TASK";

// Reducer function to handle task actions
const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, completed: action.payload.completed }
            : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// TaskManager component
const TaskManager = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [taskTitle, setTaskTitle] = useState("");

  // Handle adding a task
  const handleAddTask = () => {
    if (taskTitle.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };

    dispatch({ type: ADD_TASK, payload: newTask });
    setTaskTitle("");
  };

  // Handle updating a task's completion status
  const handleUpdateTask = (id) => {
    const task = state.tasks.find((task) => task.id === id);
    if (task) {
      dispatch({
        type: UPDATE_TASK,
        payload: { id, completed: !task.completed },
      });
    }
  };

  // Handle deleting a task
  const handleDeleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: { id },
    });
  };

  return (
    <div>
      <h2>Task Manager</h2>

      {/* Task input form */}
      <div>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task title"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Task list */}
      <ul>
        {state.tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "10px" }}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>

            <button onClick={() => handleUpdateTask(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
