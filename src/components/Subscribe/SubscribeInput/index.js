import React from 'react';

import styles from './styles.module.scss';

const SubscribeInput = () => (
    <div className={styles.container}>
        <input type="email" placeholder="Email Address" />
        <button>Submit</button>
    </div> 
);

export default SubscribeInput
