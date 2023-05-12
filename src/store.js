import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

let sagaMiddleware = createSagaMiddleware();

const initialState = { count: 0, obj: null };

function counter(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DSC":
      return { ...state, count: state.count - 1 };
    case "INC5":
      return { ...state, count: state.count + action.payload.value };
    case "ASYNC":
      return { ...state, count: state.count };
    case "ASYNC_SUCCESS":
      return { ...state, obj: action.payload };
    case "ASYNC_ERR":
      return { ...state, obj: { err: "Error" } };
    default:
      return state;
  }
}

const store = configureStore({
  reducer: {
    counter,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);
export default store;
