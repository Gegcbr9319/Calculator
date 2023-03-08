import React from 'react';
import styles from './Display.module.scss';

export const Display = () => {
    return (
        <div className={styles.display}>
            <div className={styles.displayShow}>
                <h3>0</h3>
            </div>
        </div>
    );
};
