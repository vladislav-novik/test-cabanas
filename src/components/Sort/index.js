import React from 'react';

import styles from './Sort.module.scss';

const Sort = () => (
    <button className={`text-secondary ${styles.sort}`}>
        Sort by
        <i class="fa fa-sort-desc" aria-hidden="true"></i>
    </button>
);

export default Sort;