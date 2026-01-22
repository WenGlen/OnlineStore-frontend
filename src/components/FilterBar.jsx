import React, { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['All', 'Rare', 'Popular', 'New', 'Sale'];

  return (
    <div className="filter-bar flex gap-3 mb-8 overflow-x-auto pb-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => {
            setActiveFilter(filter.toLowerCase());
            onFilterChange?.(filter.toLowerCase());
          }}
          className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition ${
            activeFilter === filter.toLowerCase()
              ? 'bg-[#00DB4F] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;