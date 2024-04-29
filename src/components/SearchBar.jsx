import React from 'react';

function SearchBar({ handleSearch }) {
  const handleChange = (e) => {
    
    handleSearch(e.target.value);
  };

  return (
    <div className="container my-4">
      <input 
        type="text" 
        className="form-control" 
        placeholder="Search transactions..." 
        onChange={handleChange} 
      />
    </div>
  );
}

export default SearchBar;
