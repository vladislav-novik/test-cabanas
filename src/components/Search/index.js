import React from 'react';

import styles from './Search.module.scss';

const Search = () => (
    <form className={styles.container}>
        <input type="text" name="search" placeholder="Search Hotel Name" />
        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
    </form>
);

export default Search;