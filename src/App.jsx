import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import Login from './components/Login';
import { loadTasks, saveTasks } from './utils/storage';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({ category: '', deadline: '' });
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('loggedIn');
    if (auth === 'true') setIsLoggedIn(true);
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

  const handleLogin = () => {
    localStorage.setItem('loggedIn', 'true');
    setIsLoggedIn(true);
    setTasks(loadTasks()); // Load tasks after login
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="container">
      <h1>Smart Task Manager</h1>
      <button onClick={handleLogout} style={{ float: 'right', marginBottom: '10px' }}>Logout</button>
      <TaskForm onSave={addOrUpdateTask} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
      <FilterBar setFilter={setFilter} />
      <TaskList
        tasks={tasks}
        filter={filter}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
        onEdit={setTaskToEdit}
      />
    </div>
  );
};

export default App;
