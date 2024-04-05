import React from 'react';
import { render } from '@testing-library/react';
import TaskList from './TaskList';

test('renders task list', () => {
  const { getByText } = render(<TaskList tasks={[]} />);
  const linkElement = getByText(/Task List/i);
  expect(linkElement).toBeInTheDocument();
});
