import React from 'react';

const TaskList = ({ tasks, filter, onDelete, onToggleComplete, onEdit }) => {
  const filtered = tasks.filter(t => {
    const byCategory = !filter.category || t.category === filter.category;
    const byDeadline = !filter.deadline || t.deadline.startsWith(filter.deadline);
    return byCategory && byDeadline;
  });

  const getDeadlineAlert = (deadline, completed) => {
    if (!deadline || completed) return null;

    const deadlineTime = new Date(deadline).getTime();
    const now = Date.now();
    const diff = deadlineTime - now;

    if (diff < -3600000) return "🔴 Overdue";
    if (diff < 0) return "⚠️ Just missed";
    if (diff < 3600000) return "⏰ Due in less than 1 hour";
    if (diff < 3 * 3600000) return "⏰ Due in 3 hours";
    if (diff < 24 * 3600000) return "🕒 Due today";

    return null;
  };

  return (
    <div className="task-list">
      {filtered.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        filtered.map(task => (
          <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span className={`category-badge category-${task.category}`}>
              {task.category}
            </span>
            <p><strong>Deadline:</strong> {task.deadline || 'None'}</p>
            {getDeadlineAlert(task.deadline, task.completed) && (
              <p style={{ color: 'red', fontWeight: 'bold' }}>
                {getDeadlineAlert(task.deadline, task.completed)}
              </p>
            )}
            <button onClick={() => onToggleComplete(task.id)}>
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => onEdit(task)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
