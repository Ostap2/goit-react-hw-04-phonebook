import React from 'react';

function Filter({ filter, handleFilterChange }) {
  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={handleFilterChange}
      className='search'
    />
  );
}

export default Filter;
