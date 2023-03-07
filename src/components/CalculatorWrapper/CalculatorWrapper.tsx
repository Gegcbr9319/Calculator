import React from 'react';
import styles from './CalculatorWrapper.module.scss';
import { ButtonsNumber, ButtonsSymbol, ButtonEqualle } from '../index';

export const CalculatorWrapper = () => {
    return (
        <div className={styles.calculatorWrapper}>
            <ButtonsSymbol />
            <ButtonsNumber />
            <ButtonEqualle />
        </div>
    );
};
