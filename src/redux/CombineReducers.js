import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./reducers/userReducer";
import { addItem, removeItem } from "./reducers/cartReducer";

function CombineReducers() {
  // State for managing user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Access the Redux store state
  const userinfo = useSelector((state) => state.userinfo);
  const cart = useSelector((state) => state.cart);

  // Dispatch actions to update the Redux store
  const dispatch = useDispatch();

  // Handle user info form submission
  const handleUserInfoSubmit = () => {
    dispatch(setUser(name, email));
  };

  // Handle adding item to the cart
  const handleAddItem = () => {
    const newItem = {
      id: Math.random(),
      name: "Item " + (cart.items.length + 1),
    };
    dispatch(addItem(newItem));
  };

  // Handle removing item from the cart
  const handleRemoveItem = (id) => {
    const itemToRemove = cart.items.find((item) => item.id === id);
    dispatch(removeItem(itemToRemove));
  };

  return (
    <div>
      <h1>Redux App with Userinfo and Cart</h1>

      {/* User Info Section */}
      <div>
        <h2>User Info</h2>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleUserInfoSubmit}>Set User Info</button>
        <div>
          <h3>User Info:</h3>
          <p>Name: {userinfo.name}</p>
          <p>Email: {userinfo.email}</p>
        </div>
      </div>

      {/* Cart Section */}
      <div>
        <h2>Cart</h2>
        <button onClick={handleAddItem}>Add Item to Cart</button>
        <ul>
          {cart.items.map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CombineReducers;
