import React from 'react';

import SubscribeInput from './SubscribeInput';

import styles from './styles.module.scss';

const Subscribe = () => (
    <div className="d-flex justify-content-between align-items-center border-top border-bottom py-4 mb-4">
        <div className="d-flex align-items-center">
            <i className={`fa fa-envelope-o ${styles.icon}`} aria-hidden="true"></i>
            <div className="px-4">
                <div className={styles.title}>Save 15% Off Your First Purchase</div>
                <div className={styles.description}>Sign up today for free &amp; be the first to know when we add new luxury hotels and run special offers &amp; sales.</div>
            </div>
        </div>
        <SubscribeInput />
    </div>
);

export default Subscribe;
