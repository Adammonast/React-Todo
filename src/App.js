import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './styles.css';

const tasks = [
  {
    task: "Finish Lambda Assignment",
    id: 1,
    completed: false
  },
  {
    task: "Catch Up on Comics",
    id: 2,
    completed: false
  },
  {
    task: "Test Competitve Pokemon Team",
    id: 3,
    completed: false
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: tasks
    };
  }
  toggleTask = id => {
    const newTodoList = this.state.todoList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }
    });
    this.setState({
      todoList: newTodoList
    });
  };

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  };

  // removeTask = taskName => {
  //   const removeTask = {
  //     task: taskName,
  //     id: Date.now(),
  //     completed: false
  //   };
  //   this.setState({
  //     todoList: this.state.todoList.filter(task => task.id !== id)
  //   })
  // }

  deleteTask = e => {
    e.preventDefault()
    let todoList = this.state.todoList.filter(task => !task.completed)
    this.setState({todoList})
  }

  render() {
    console.log("Rendering...");
    return(
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          tasks={this.state.todoList} 
          toggleTask={this.toggleTask}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;


