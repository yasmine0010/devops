import React from 'react';
import { render } from '@testing-library/react';
import TaskList from './TaskList';

test('renders task list', () => {
  // Mock data for tasks
  const tasks = [
    { id: 1, description: 'Task 1' },
    { id: 2, description: 'Task 2' },
    { id: 3, description: 'Task 3' },
  ];

  // Render the TaskList component with mock tasks
  const { getByText } = render(<TaskList tasks={tasks} />);

  // Check if the title of the TaskList is rendered
  const titleElement = getByText('Task List');
  expect(titleElement).toBeInTheDocument();

  // Check if each task description is rendered
  tasks.forEach(task => {
    const taskElement = getByText(task.description);
    expect(taskElement).toBeInTheDocument();
  });
});
