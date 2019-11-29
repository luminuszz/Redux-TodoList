import { call, put } from "redux-saga/effects";

import api from "../../services/api";

import { addTodosSuccess } from "../actions/TodoList";
export function* addTodo(action) {
  const { data } = yield call(api.get, `repos/${action.payload.repository}`);

  const infoData = {
    id: data.id,
    name: data.full_name,
    description: data.description,
    url: data.html_URL
  };

  yield put(addTodosSuccess(infoData));
}
