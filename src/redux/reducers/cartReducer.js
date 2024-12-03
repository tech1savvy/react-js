// Action types
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

// Initial state for cart
const initialState = {
  items: [],
};

// Reducer for cart slice of state
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload], // Add new item to the cart
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id), // Remove item from cart by ID
      };
    default:
      return state;
  }
};

// Action creators for adding and removing items
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});
