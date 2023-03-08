import React from 'react';
import styles from './CalculatorWrapper.module.scss';
import { ButtonsNumber, ButtonsSymbol, ButtonEqualle, Display } from '../index';

export const CalculatorWrapper = () => {
    return (
        <div className={styles.calculatorWrapper}>
            <Display />
            <ButtonsSymbol />
            <ButtonsNumber />
            <ButtonEqualle />
        </div>
    );
};
