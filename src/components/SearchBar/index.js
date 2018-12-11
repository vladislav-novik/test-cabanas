import React from 'react';

import Search from '../Search';
import Sort from '../Sort';
import TypeFilter from './TypeFilter';

const SearchBar = () => (
    <div className="d-flex justify-content-between align-items-baseline mb-4">
        <Search />
        <TypeFilter />
        <Sort />
    </div>
);

export default SearchBar;