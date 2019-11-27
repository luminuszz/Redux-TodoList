import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
const TodoList = () => {
  const array = useSelector(state => state.todos);

  return (
    <ul>
      {array.map(dados => (
        <li key={dados.id}>
          {dados.text}
          <p>{dados.context}</p>
          <li />
        </li>
      ))}
    </ul>
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
