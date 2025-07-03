import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import { loadTasks, saveTasks } from './utils/storage';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({ category: '', deadline: '' });

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addOrUpdateTask = (task) => {
    setTasks(prev => {
      const existingIndex = prev.findIndex(t => t.id === task.id);
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = task;
        return updated;
      }
      return [...prev, task];
    });
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="container">
      <h1>Smart Task Manager</h1>
      <TaskForm onSave={addOrUpdateTask} />
      <FilterBar setFilter={setFilter} />
      <TaskList
        tasks={tasks}
        filter={filter}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
        onEdit={addOrUpdateTask}
      />
    </div>
  );
};

export default App;
