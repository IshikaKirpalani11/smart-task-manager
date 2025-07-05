import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ onSave, taskToEdit, setTaskToEdit }) => {
  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
    category: 'Work',
    deadline: '',
    completed: false,
  });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = e => {
    const { name, value } = e.target;
    setTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!task.title) return;
    const newTask = { ...task, id: task.id || uuidv4() };
    onSave(newTask);
    setTask({ id: '', title: '', description: '', category: 'Work', deadline: '', completed: false });
    setTaskToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input name="title" placeholder="Task Title" value={task.title} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={task.description} onChange={handleChange} />
      <select name="category" value={task.category} onChange={handleChange}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Learning">Learning</option>
      </select>
      <input name="deadline" type="datetime-local" value={task.deadline} onChange={handleChange} />
      <button type="submit">{taskToEdit ? 'Update Task' : 'Save Task'}</button>
    </form>
  );
};

export default TaskForm;
