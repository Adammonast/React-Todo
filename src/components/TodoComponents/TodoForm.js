import React from 'react';

class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        taskText: ''
      };
    }
  
    handleChanges = e => {
      this.setState({
        taskText: e.target.value
      });
    };

    handleSubmit = event => {
      event.preventDefault();
      this.props.addTask(this.state.taskText);
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            task="task"
            value={this.state.taskText}
            onChange={this.handleChanges}
          />
          <button className="add-btn">Add</button>
        </form>
      );
    }
  }

export default TodoForm;