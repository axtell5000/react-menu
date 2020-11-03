import React from 'react';

const Categories = ({ filterItems }) => {
  return (
    <div className="btn-container">
    <button className="filter-btn" onClick={() => filterItems('all')} title="Filter by all items">all</button>
      <button className="filter-btn" onClick={() => filterItems('breakfast')} title="Filter by breakfast items">breakfast</button>
    </div>
  );
};

export default Categories;
