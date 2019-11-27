import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import * as actionFunction from "../../store/actions/TodoList";
import { Container, Title, List } from "./styles";

const TodoList = () => {
  const array = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function addTodo(e) {
    e.preventDefault();

    dispatch(actionFunction.addTodo(input));
  }

  function removeTodo(id) {
    dispatch(actionFunction.removeTodo(id));
  }

  return (
    <Container>
      <Title>Escreva uma todo</Title>
      <form onSubmit={addTodo}>
        <input
          placeholder="Escreava algo"
          value={input}
          onChange={e => {
            setInput(e.target.value);
          }}
          type="text"
        />
        <br />
        <button type="submit">Enviar todo</button>
      </form>

      <List>
        {array.map(dados => (
          <li key={dados.id}>
            {dados.text}{" "}
            <button
              onClick={() => {
                removeTodo(dados.id);
              }}
            >
              Remover todo
            </button>
          </li>
        ))}
      </List>
    </Container>
  );

  TodoList.propTypes = {
    array: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        context: PropTypes.string
      })
    ).isRequired
  };
};

export default TodoList;
