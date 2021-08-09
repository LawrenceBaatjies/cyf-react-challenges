import React from "react";

const FilterInputs = ({ searchValue, handleSearch, handleFilter }) => {
  return (
    <div className="filter-container">
      <div className="search">
        {/* <i className="fa fa-search search-icon"></i> */}
        <input
          className="searchBar"
          type="text"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={handleSearch}
        />
      </div>
      <div className="select">
        <select
          className="filter-select"
          aria-label="Filter countries by region"
          onChange={handleFilter}
        >
          <option value="All">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default FilterInputs;
