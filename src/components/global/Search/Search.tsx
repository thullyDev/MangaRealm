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
    <div className="search-con flex items-center">
      <form onSubmit={handleSubmit}>
        <div className="inner-search-con flex bg-zinc-800 py-1 px-3 rounded-full border border-zinc-600">
          <div className="search-input-con">
            <button type="submit" className="px-2">
              <i className="fas fa-search text-zinc-400 text-xs"></i>
            </button>
            <input
              className="px-2 min-w-64 bg-inherit text-sm text-zinc-400 outline-none"
              type="text"
              placeholder="Search Manga..."
              value={query}
              onChange={handleChange}
            />
          </div>
          <div className="filter-link-con">
            <a href={filterLink} className="filter-link flex gap-2 items-center text-sm rounded-full py-1 px-3 bg-zinc-600">
              <i className="fas fa-filter"></i>
               Filter
            </a>
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
