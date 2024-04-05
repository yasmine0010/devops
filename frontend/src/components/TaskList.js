import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
