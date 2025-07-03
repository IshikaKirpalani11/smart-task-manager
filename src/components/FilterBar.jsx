import React from 'react';

const FilterBar = ({ setFilter }) => {
  const handleChange = e => {
    const { name, value } = e.target;
    setFilter(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filter-bar">
      <select name="category" onChange={handleChange}>
        <option value="">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Learning">Learning</option>
      </select>
      <input type="date" name="deadline" onChange={handleChange} />
    </div>
  );
};

export default FilterBar;
