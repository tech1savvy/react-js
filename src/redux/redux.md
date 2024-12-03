### **What is Redux?**

Redux is a **state management library** that helps manage and centralize the state of an application in a predictable way. It is mainly used with libraries like **React** to manage the state across different components in a consistent manner.

In a React application, the state of a component is usually **local** to that component. However, when we need to share state across multiple components (like a to-do list in various parts of the app), it becomes difficult to manage this state efficiently. **Redux** provides a global store, making it easier to manage the state of the entire application in one central location.

### **Basic Terms and Concepts**

#### 1. **Store**

The **store** in Redux holds the entire state of the application. Think of it as a container where the **global state** is stored. It’s the source of truth in your app. Any time you need to access or update the state, you interact with the store.

In the context of our to-do list app:

- The store holds an array of **todos**.
- Any update to the to-dos happens through actions and reducers.

#### 2. **Actions**

An **action** in Redux is an **object** that represents an **intention to change** the state. Actions are dispatched to the Redux store, and they describe what kind of changes are needed.

In our to-do app, we have two actions:

- `ADD_TODO`: Used to add a new to-do item to the list.
- `REMOVE_TODO`: Used to remove a to-do item from the list.

Actions contain a `type` property (a string) that identifies the action and an optional `payload` that holds the data to be processed (like the text of a to-do or its ID).

Example:

```javascript
{
  type: 'ADD_TODO',
  payload: { id: 1, text: 'Learn Redux' }
}
```

#### 3. **Reducers**

A **reducer** is a pure function that specifies how the **state** of the application changes in response to an action. When an action is dispatched, the reducer receives the current state and the action, and returns the new state.

Reducers are **pure functions**, meaning they do not modify the original state, but return a **new state**.

For example, if the action is `ADD_TODO`, the reducer will take the current state (the existing to-dos) and return a new state that includes the new to-do item.

```javascript
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
```

- `state`: The current state of the app.
- `action`: The action that has been dispatched (which contains `type` and optional `payload`).

#### 4. **Dispatching Actions**

To **change the state**, you need to **dispatch actions**. Dispatching an action means sending it to the Redux store to be processed by the reducer.

In a React component, you use the `useDispatch` hook (from `react-redux`) to get access to the `dispatch` function. You then call `dispatch` with the action you want to send to the Redux store.

Example:

```javascript
dispatch(addTodo(newTodo)); // Dispatching the action to add a new to-do
```

#### 5. **Selectors**

A **selector** is a function used to **retrieve** a specific part of the state from the store. In the code, we used `useSelector` from `react-redux` to select the `todos` from the Redux store. This hook allows you to access state in a Redux-connected component.

Example:

```javascript
const todos = useSelector((state) => state.todos);
```

This line gets the `todos` from the current state of the store. The `useSelector` hook subscribes the component to the Redux store, and whenever the state changes, the component will automatically re-render with the updated state.

---

### **How Redux Works in the To-Do List App**

Here’s a breakdown of the steps involved:

1. **Create the Redux Store**
   - We create the store using `createStore()` from Redux, passing in the root reducer (`todoReducer`).
   - The store holds the global state, which in our case is the `todos` array.

```javascript
const store = createStore(todoReducer);
```

2. **Define Actions**
   - We define **actions** for adding and removing to-dos. The action creators (`addTodo` and `removeTodo`) return action objects with a `type` and any necessary `payload`.

```javascript
export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});
```

3. **Create Reducer**
   - The reducer is a pure function that manages the state of to-dos. It listens for `ADD_TODO` and `REMOVE_TODO` actions and modifies the state accordingly.
   - When an action is dispatched, the reducer updates the state and returns a new version of the state (since Redux state is immutable).

```javascript
const todoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
```

4. **React Component**
   - We use the `useDispatch` hook to dispatch actions and the `useSelector` hook to access the state from the Redux store.
   - When the user adds or removes a to-do, we dispatch the appropriate action (`addTodo` or `removeTodo`), and the Redux store updates the state accordingly.

```javascript
const TodoList = () => {
  const [todoText, setTodoText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), text: todoText };
    dispatch(addTodo(newTodo));
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
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
```

5. **Provider Component**
   - The entire app is wrapped in the `Provider` component, which gives access to the Redux store to all components in the app. Without this, the components wouldn’t be able to interact with the store.

```javascript
<Provider store={store}>
  <TodoList />
</Provider>
```

---

### **Flow of Data in Redux**

1. **User Action**: The user interacts with the component (e.g., clicking "Add Todo").
2. **Dispatch Action**: The component dispatches an action (e.g., `addTodo`).
3. **Reducer Processes Action**: The action is handled by the reducer, which updates the state based on the action.
4. **State Update**: The Redux store updates the global state.
5. **Re-render**: Since the component is connected to the Redux store via `useSelector`, it automatically re-renders to reflect the updated state.

---

### **Summary of Key Redux Concepts**

- **Store**: Holds the entire application state.
- **Actions**: Describe **what** happened (e.g., `ADD_TODO`, `REMOVE_TODO`).
- **Reducers**: **Specify how** the state changes in response to actions.
- **Dispatch**: The method used to send actions to the store.
- **Selector**: A function that allows components to access the state.
- **Provider**: A wrapper that passes the Redux store to the React component tree.

By using these Redux concepts, you can effectively manage the state of your application in a predictable and scalable way.
