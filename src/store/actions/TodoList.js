export function addTodoRequest(text) {
  return {
    type: "ADD_TODO_REQUEST",
    payload: { text }
  };
}

export function addTodosSuccess(data) {
  return {
    type: "ADD_TODO_SUCCESS",
    payload: { data }
  };
}

export function removeTodo(id) {
  return {
    type: "REMOVE_TODO",
    payload: { id }
  };
}
