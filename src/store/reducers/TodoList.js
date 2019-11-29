const INNITAL_STATE = [];

export default function todos(state = INNITAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO_SUCCESS":
      return [...state, action.payload.data];
      break;

    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload.id);

      break;

    default:
      return state;
  }
}
