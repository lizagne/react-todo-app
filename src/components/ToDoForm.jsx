//First presentation component the Todo From

import React from 'react';

const ToDoForm = ({ addTodo }) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
      <input className="form-control col-md-12" ref={node => {
        input = node;
      }} />
      <br />
    </form>
  );
};

export default ToDoForm;



//Functional components just receive props (which we destructured with ES6) as arguments and return JSX to be rendered. TodoForm has just one prop which is a handler that handles the click event for adding a new todo.

//The value of the input is passed to the input member variable using React's ref.