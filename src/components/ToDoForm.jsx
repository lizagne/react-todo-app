//First presentation component the Todo From

import React, { Component } from 'react';

class ToDoForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNewTodoAddition = this.handleNewTodoAddition.bind(this);
  }
  
  handleChange(event) {

    this.setState({
      value: event.target.value
    });

  }
  
  handleNewTodoAddition() {
    if(this.input.value !== '') {
      this.props.addTodo(this.input.value);
      this.setState({
        value: ''
      });
      this.input.placeholder = "Add todo here...";
    }
  }
  
  render() {
    return (
      // ref should be passed a callback
      // with underlying dom element as its
      // argument to get its reference 
      <div id="form">
        <input 
          ref={node => {
            this.input = node;
          }}
          value={this.state.value}
          placeholder="Add todos here..."
          autoComplete="off"
          onChange={this.handleChange}
        />

        <button 
          onClick={this.handleNewTodoAddition}> 
          +
        </button> 
      </div>
    );
  }
}


export default ToDoForm;

//Functional components just receive props (which we destructured with ES6) as arguments and return JSX to be rendered. TodoForm has just one prop which is a handler that handles the click event for adding a new todo.

//The value of the input is passed to the input member variable using React's ref.