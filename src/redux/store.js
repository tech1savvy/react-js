import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";

// Create Redux store using the combined reducers
const store = createStore(rootReducer);

export default store;
