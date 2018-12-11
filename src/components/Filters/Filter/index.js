import React from 'react';

import styles from './Filter.module.scss';

const Filter = ({ title, icon }) => (
    <div className={styles.container}>
        <i className={`fa fa-${icon}`}></i>
        <button>{title}</button>
    </div>
);

export default Filter;