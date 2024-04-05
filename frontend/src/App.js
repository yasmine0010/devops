import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  // Mock data for tasks
  const tasks = [
    { id: 1, description: 'Task 1' },
    { id: 2, description: 'Task 2' },
    { id: 3, description: 'Task 3' },
  ];

  // Function to add a new task
  const addTask = (newTask) => {
    // Logic to add a new task to the list of tasks
    console.log('New task:', newTask);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
      </header>
      <main>
        {/* Affichage du formulaire TaskForm */}
        <TaskForm addTask={addTask} />
        {/* Affichage de la liste des tâches TaskList */}
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}

export default App; // Assurez-vous que vous avez cette ligne pour exporter votre composant App par défaut
