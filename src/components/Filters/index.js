import React from 'react';

import Filter from './Filter';
import { filters } from '../../utils/constant';

import styles from './Filters.module.scss';

const Filters = () => (
    <ul className={styles.filter}>
    {
        filters.map((filter, index) => ( 
        <li key={index}>
            <Filter icon={filter.icon} title={filter.title} />
        </li>))
    }
        <button className={styles.clear}>Clear all</button>   
    </ul>
);

export default Filters;
