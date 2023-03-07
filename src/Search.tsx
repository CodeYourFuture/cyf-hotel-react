import React, { useState } from 'react';
import SearchButton from './SearchButton';

type PropsType = {
  search: (searchVal: string) => void;
};
const Search = ({ search }: PropsType) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    search(searchInput.toLowerCase());
  };
  return (
    <div className='search'>
      <div className='page-header'>
        <h4 className='text-left'>Search Bookings</h4>
      </div>
      <div className='row search-wrapper'>
        <div className='col'>
          <form className='form-group search-box' onSubmit={handleSubmit}>
            <label htmlFor='customerName'>Customer name</label>
            <div className='search-row'>
              <input
                type='text'
                id='customerName'
                className='form-control'
                placeholder='Customer name'
                value={searchInput}
                onChange={handleSearchInput}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
