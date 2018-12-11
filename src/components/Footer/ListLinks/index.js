import React from 'react';

import styles from './styles.module.scss';

const renderList = (links) => (
    <ul className="list-unstyled">
        {
            links.map((link, index) => (
            <li key={index}>
                <a href="#!" className={`text-secondary ${styles.link}`}>{link}</a>
            </li>))
        }
    </ul>
) 

const ListLinks = ({ title, links, className }) => (
    <div className={className}>
        <h6 className={styles.title}>{title}</h6>
        {
            links && renderList(links)
        }
    </div>
)

export default ListLinks;
