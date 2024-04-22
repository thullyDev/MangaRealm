import React, { useState } from 'react';

// interface SearchProps {
//   onSearch: (query: string) => void;
// }

function onSearch(query: string) {
  console.log({ query }) 
}

const Search = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  const filterLink: string =  `/filter?keywords=${query}`

  return (
    <div className="search-con">
      <form onSubmit={handleSubmit}>
        <div className="inner-search-con">
          <div className="search-input-con">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleChange}
            />
            <button type="submit">Search</button>
          </div>
          <div className="filter-link-con">
            <a href={filterLink} className="filter-link"></a>
          </div>
        </div>
      </form>
      <div className="result-items-con">
        <ul className="result-list">
        </ul>
      </div>
    </div>
  );
};

export default Search;
