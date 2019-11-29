import { all, takeLatest } from "redux-saga/effects";

import { addTodo } from "../sagas/Todos";

export default function* rootSaga() {
  yield all([takeLatest("ADD_TODO_REQUEST", addTodo)]);
}
