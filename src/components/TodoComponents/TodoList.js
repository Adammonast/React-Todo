import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.tasks.map(task => (
        <Todo key={task.id} task={task} toggleTask={props.toggleTask} />
      ))}
      <button className="clear-btn" onClick={props.deleteTask}>
        Delete Completed
      </button>
    </div>
  );
};

export default TodoList;
