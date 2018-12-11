import React from 'react';

import { typesFilter } from '../../../utils/constant';

import styles from './TypeFilter.module.scss';

const TypeFilter = () => (
    typesFilter && (
        <ul className="list-inline mb-0">
        {
            typesFilter.map((item, index) => (
                <li key={index} className="list-inline-item ml-2">
                    <button className={styles.type}>{item.title}</button>
                </li>
            ))
        }
        </ul>
    )
);

export default TypeFilter;