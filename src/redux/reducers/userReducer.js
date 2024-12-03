// Action types
const SET_USER = "SET_USER";

// Initial state for userinfo
const initialState = {
  name: "",
  email: "",
};

// Reducer for userinfo slice of state
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

// Action creator for setting user info
export const setUser = (name, email) => ({
  type: SET_USER,
  payload: { name, email },
});
