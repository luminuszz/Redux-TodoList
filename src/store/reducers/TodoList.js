import { matcherHint } from "jest-matcher-utils";

const INNITAL_STATE = [
  {
    id: Math.random(),
    text: "dasd",
    context: "dasd"
  }
];

export default function todos(state = INNITAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.payload.text }];
      break;

    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload.id);

      break;

    default:
      return state;
  }
}
