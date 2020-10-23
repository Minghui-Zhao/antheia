import { combineReducers, applyMiddleware, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import perfumeReducer from "./perfume/perfume-reducer";

const rootReducer = combineReducers({
  perfumeReducer: perfumeReducer,
});

export const configStore = () => {
  const middleWare = [thunkMiddleWare];
  const middleWareEnhancer = applyMiddleware(...middleWare);
  return createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
};

