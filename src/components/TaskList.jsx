import React from 'react';

const TaskList = ({ tasks, filter, onDelete, onToggleComplete }) => {
  const filtered = tasks.filter(t => {
    const byCategory = !filter.category || t.category === filter.category;
    const byDeadline = !filter.deadline || t.deadline.startsWith(filter.deadline);
    return byCategory && byDeadline;
  });

  return (
    <div className="task-list">
      {filtered.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        filtered.map(task => (
          <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p><strong>Category:</strong> {task.category}</p>
            <p><strong>Deadline:</strong> {task.deadline || 'None'}</p>
            <button onClick={() => onToggleComplete(task.id)}>
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
