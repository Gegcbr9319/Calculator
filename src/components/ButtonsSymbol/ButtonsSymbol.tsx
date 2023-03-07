import React from 'react';
import styles from './ButtonsSymbol.module.scss';
import { Button } from '../index';

export const ButtonsSymbol = () => {
    return (
        <div className={styles.buttonsSymbol}>
            <Button value="/" />
            <Button value="x" />
            <Button value="-" />
            <Button value="+" />
        </div>
    );
};
