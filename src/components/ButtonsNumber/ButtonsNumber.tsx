import React from 'react';
import styles from './ButtonsNumber.module.scss';
import { Button } from '../index';

export const ButtonsNumber = () => {
    return (
        <div className={styles.buttonsNumber}>
            <div className={styles.buttonsLine}>
                <Button value="7" />
                <Button value="8" />
                <Button value="9" />
            </div>
            <div className={styles.buttonsLine}>
                <Button value="4" />
                <Button value="5" />
                <Button value="6" />
            </div>
            <div className={styles.buttonsLine}>
                <Button value="1" />
                <Button value="2" />
                <Button value="3" />
            </div>
            <div className={styles.buttonsLine}>
                <Button value="+/-" />
                <Button value="0" />
                <Button value="." />
            </div>
        </div>
    );
};
